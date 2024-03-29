import { useRef } from 'react';
import { Text, Group, Button, rem, useMantineTheme, Container, Space } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';
import classes from './ResumeUpload.module.css';

export function ResumeUpload() {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  return (
    <div>
        <Container align='center'>
          <Dropzone
            openRef={openRef}
            onDrop={() => {}}
            className={classes.dropzone}
            radius="md"
            accept={[MIME_TYPES.pdf]}
            maxSize={30 * 1024 ** 2}
            maw={400}
          >
            <div style={{ pointerEvents: 'none' }}>
              <Group justify="center" >
                <Dropzone.Accept>
                  <IconDownload
                    style={{ width: rem(30), height: rem(30) }}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    style={{ width: rem(30), height: rem(30) }}
                    color={theme.colors.red[6]}
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconCloudUpload style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
                </Dropzone.Idle>
              </Group>

              <Text ta="center" fw={400} fz="lg">
                <Dropzone.Accept>Drop files here</Dropzone.Accept>
                <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
                <Dropzone.Idle>Upload Resume</Dropzone.Idle>
              </Text>
              <Text ta="center" fz="sm" c="dimmed">
                Drag&apos;n&apos;drop <i>.pdf</i> files here or click to upload.
              </Text>
            </div>
          </Dropzone>
          <Space h="md" />
          <Button
            variant="filled"
            color="rgba(59, 168, 94, 0.5)"
            radius="md"
            onClick={() => openRef.current?.()}
          >
            Select Resume
          </Button>
        </Container>
    </div>
  );
}
