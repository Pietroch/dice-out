import { Avatar, Text, Group, Container, Grid, Button, Modal, Title } from '@mantine/core';

import { useDisclosure } from "@mantine/hooks";

import { IconPhoneCall, IconAt } from '@tabler/icons-react';

import IndividualKeyword from './IndividualKeyword';
import IndividualStar from './IndividualStar';

import data from './data';

const IndividualDetails = () => {

  const individual = data
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="Genealogical Tree"
        centered
        size="auto"
      >
        Bonjour
      </Modal>
      <Group wrap="nowrap">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={94}
          radius="md"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Software engineer
          </Text>

          <Text fz="lg" fw={500}>
            {individual.first_names_list} {individual.last_name.name}
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              robert@glassbreaker.io
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              +11 (876) 890 56 23
            </Text>
          </Group>
        </div>
      </Group>
      <Button onClick={open}>Voir les relations</Button>
      <IndividualKeyword individual={individual} />
      <IndividualStar individual={individual} />
    </div>
  );
};

export default IndividualDetails;