'use client';

import {
  Image,
  TextInput,
  Title,
  Button,
  Card,
  Text,
  ActionIcon,
  rem,
  Space,
  Group,
  Tooltip,
  Stack,
  Grid,
  Container,
  FileButton,
  Progress,
  useMantineTheme,
  rgba,
  SimpleGrid,
  Center,
  Paper,
} from '@mantine/core';

import {
  IconCopy,
  IconThumbUp,
  IconThumbDown,
  IconCheck,
  IconDownload,
  IconRepeat,
  IconPhotoFilled,
  IconMail,
} from '@tabler/icons-react';
import { useScrollIntoView, useInterval } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

import classes from './Hero.module.css';
import ReactMarkdown from 'react-markdown';

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { apiBaseUrl } from './utils/constants';

import try_arrow from 'public/try_arrow.svg';
import doodle_break from 'public/doodle_break.svg';
import { PageBackgroundImage } from './Background';

export function HomeworkHelperApp() {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [streamedResponse, setStreamedResponse] = useState<string>('');
  const [apiError, setApiError] = useState<string | null>(null);
  const [homeworkImage, setHomeworkImage] = useState<File | null>(null);
  const [childAge, setChildAge] = useState<number | undefined>();
  const [aboutChild, setAboutChild] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [responseContent, setResponseContent] = useState<string>('');
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const theme = useMantineTheme();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: -100,
    cancelable: true,
    isList: true,
  });
  const [firstChunkReceived, setFirstChunkReceived] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  // const [additionalNotes, setAdditionalNotes] = useState('');
  // const [useGpt4, setUseGpt4] = useState(false);

  // Icons
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  const sendHomeworkHelperRequestViaWebSocket = async () => {
    if (ws && homeworkImage) {
      setIsSending(true);
      try {
        const base64Image = await resizeImage(homeworkImage, 1280, 720);

        const requestData = {
          img: base64Image, // Send the resized Base64 string
          age: childAge,
          about: aboutChild,
        };

        ws.send(JSON.stringify(requestData));
      } catch (error) {
        console.error('Error processing image:', error);
        setApiError('Failed to process image.');
      }
    }
  };

  const connectWebSocket = () => {
    const websocket = new WebSocket(
      apiBaseUrl + '/homework-helper-ws'
    );

    websocket.onmessage = (event) => {
      setStreamedResponse((prev) => {
        // Concatenate new streamed data
        const updatedResponse = prev + event.data;

        // Update responseContent with the updated response
        setResponseContent(updatedResponse);

        if (!firstChunkReceived) {
          setFirstChunkReceived(true);
          setIsSending(false);
          scrollIntoView({ alignment: 'end' });
        }

        return updatedResponse;
      });
    };

    setWs(websocket);
  };

  function resizeImage(file: File, maxWidth: number, maxHeight: number) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img') as HTMLImageElement;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx!.drawImage(img, 0, 0, width, height);

          let base64 = canvas.toDataURL('image/jpeg');

          // Strip off the data URI prefix if present
          if (base64.startsWith('data:image')) {
            base64 = base64.split(',')[1];
          }

          resolve(base64); // Resolve with Base64 string without prefix
        };

        img.onerror = (error) => reject(error);
        if (e.target) {
          img.src = e.target.result as string;
        }
      };

      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file); // Read the file as a data URL (Base64 string)
    });
  }

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const handleFileChange = (file: File | null) => {
    setHomeworkImage(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImageUrl(imageUrl);
    } else {
      setUploadedImageUrl(null); // Reset the URL if no file is selected
    }
  };

  const interval = useInterval(
    () =>
      setProgress((current) => {
        if (current < 100) {
          return current + 1;
        }

        interval.stop();
        setLoaded(true);
        return 0;
      }),
    20
  );

  const downloadAsPDF = async () => {
    const module = await import('html2pdf.js');
    const html2pdf = module.default;
    const responseContent = document.getElementById('response-content');
    if (responseContent) {
      html2pdf().from(responseContent).toPdf().save('response.pdf');
    } else {
      console.error('Element with id "response-content" not found');
    }
  };

  function markdownToPlainText(markdown: string) {
    return markdown
      .replace(/\\#/g, '#') // Unescape escaped hash
      .replace(/\*\*(.*?)\*\*/g, '$1') // Bold **text**
      .replace(/\*(.*?)\*/g, '$1') // Italic *text*
      .replace(/\_\_(.*?)\_\_/g, '$1') // Bold __text__
      .replace(/\_(.*?)\_/g, '$1') // Italic _text_
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Links [text](url)
      .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images ![alt](url)
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/`(.+?)`/g, '$1') // Inline code `code`
      .replace(/\n{2,}/g, '\n\n') // Normalize newlines
      .replace(/^[\-\*\+]\s?/gm, '') // Remove list characters
      .replace(/^>\s?/gm, '') // Remove blockquotes
      .replace(/^#{1,6}\s?/gm, ''); // Remove headings
  }

  const shareByEmail = () => {
    const subject = 'Check this out! A homework guide from learning.tools';
    const plainTextBody = markdownToPlainText(responseContent);

    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      plainTextBody
    )}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <Container id="page-container" size="auto" mb={20}>
      <Container mt={50}>
        <Stack gap={25}>
          <Title ta="center" className={classes.title}>
            Learn together, grow together.
          </Title>

          <Text ta="center" className={classes.subtitle}>
            With a helpful guide tailored to your child's homework.
          </Text>
        </Stack>
        <Space h={30} />

        {/* START: File Input */}
        <Center>
          <Container className={classes.container}>
            <Stack>
              <Card padding="xl" radius="xl" shadow="xl" className={classes.subCard}>
                <Text ta="center" mb={20} className={classes.subSubtitle}>
                  Simply upload a photo!
                </Text>
                <Group justify="center" gap="lg" pb={10} px={10}>
                  <Image src={try_arrow.src} className={classes.imageTry} />

                  <FileButton
                    onChange={(file: File | null) => {
                      handleFileChange(file);
                      if (loaded) {
                        setLoaded(false);
                      } else if (!interval.active) {
                        interval.start();
                      }
                    }}
                    accept="image/*"
                  >
                    {(props) => (
                      <Button
                        {...props}
                        leftSection={<IconPhotoFilled size={24} />}
                        size="lg"
                        radius="lg"
                        className={classes.button}
                        color={loaded ? 'teal.3' : 'teal.6'}
                      >
                        <div className={classes.label}>
                          {progress !== 0
                            ? 'Uploading Files'
                            : loaded
                              ? 'Image Uploaded'
                              : 'Upload Image'}
                        </div>
                        {progress !== 0 && (
                          <Progress
                            value={progress}
                            className={classes.progress}
                            color={rgba(theme.colors.green[3], 0.35)}
                            radius="md"
                          />
                        )}
                      </Button>
                    )}
                  </FileButton>
                </Group>
                {homeworkImage && (
                  <Container fluid>
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                      <TextInput
                        label="Age"
                        description="What is the age of the student?"
                        variant="filled"
                        size="lg"
                        radius="lg"
                        placeholder="10"
                        value={childAge}
                        onChange={(e) => setChildAge(parseInt(e.currentTarget.value))}
                      />
                      <TextInput
                        label="About"
                        description="Describe your child in a few words."
                        variant="filled"
                        size="lg"
                        radius="lg"
                        placeholder="Visual learner"
                        value={aboutChild}
                        onChange={(e) => setAboutChild(e.currentTarget.value)}
                      />
                    </SimpleGrid>
                    <Space h="xl" />
                    <Button
                      size="lg"
                      color="teal.5"
                      variant="filled"
                      radius="lg"
                      fullWidth
                      loading={isSending}
                      onClick={sendHomeworkHelperRequestViaWebSocket}
                    >
                      Write Guide!
                    </Button>
                    {apiError && <Text c="red.500">{apiError}</Text>}
                  </Container>
                )}
              </Card>
            </Stack>
          </Container>
        </Center>

        {/* Response */}
        <Container size="auto" ref={targetRef}>
          <div id="response-content">
            {streamedResponse && (
              <div>
                {' '}
                {/* Change this to a card + classes.subCard for effect */}
                <Group mt={50} justify="space-between" align="flex-end">
                  <Text fw={500} size="xl">
                    Homework Guide:
                  </Text>
                  <ActionIcon.Group>
                    <ActionIcon size="lg" color="teal" variant="light" radius="md">
                      <IconThumbUp style={{ width: '70%', height: '70%' }} stroke={1.2} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="teal" variant="light" radius="md">
                      <IconThumbDown style={{ width: '70%', height: '70%' }} stroke={1.2} />
                    </ActionIcon>
                    <Tooltip
                      label="Copy response"
                      withArrow
                      transitionProps={{ transition: 'pop', duration: 300 }}
                    >
                      <ActionIcon
                        size="lg"
                        color="teal"
                        variant="light"
                        radius="md"
                        onClick={() => {
                          navigator.clipboard.writeText(streamedResponse);
                          notifications.show({
                            title: 'learning.tools:',
                            message: 'Text copied!',
                            icon: checkIcon,
                            color: 'teal',
                          });
                        }}
                      >
                        <IconCopy style={{ width: '70%', height: '70%' }} stroke={1.2} />
                      </ActionIcon>
                    </Tooltip>
                  </ActionIcon.Group>
                </Group>
                <div>
                  {streamedResponse && <ReactMarkdown>{streamedResponse}</ReactMarkdown>}
                </div>
                <Center>
                  <Image mt="lg" src={doodle_break.src} alt="learning.tools" />
                </Center>
                <Container fluid mt="xl" mb="lg">
                  <Container fluid>
                    <Grid>
                      <Grid.Col span={6}>
                        <Stack>
                          <Button
                            radius="xl"
                            color="teal"
                            rightSection={<IconDownload size={18} />}
                            onClick={downloadAsPDF}
                          >
                            PDF
                          </Button>
                          <Button
                            radius="xl"
                            color="teal"
                            rightSection={<IconMail size={18} />}
                            onClick={shareByEmail}
                          >
                            Email
                          </Button>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={6}>
                        <Stack>
                          <Button
                            radius="xl"
                            color="teal"
                            rightSection={<IconCopy size={18} />}
                            onClick={() => {
                              navigator.clipboard.writeText(streamedResponse);
                              notifications.show({
                                title: 'learning.tools:',
                                message: 'Text copied!',
                                icon: checkIcon,
                                color: 'teal',
                              });
                            }}
                          >
                            Copy
                          </Button>
                          <Button
                            radius="xl"
                            color="teal"
                            rightSection={<IconRepeat size={18} />}
                            loading={isSending}
                            onClick={sendHomeworkHelperRequestViaWebSocket}
                          >
                            Redo
                          </Button>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Container>
                </Container>
              </div>
            )}
          </div>
        </Container>
      </Container>
      <Space h={40} />
      <Center>
        <PageBackgroundImage />
      </Center>
    </Container>
  );
}
