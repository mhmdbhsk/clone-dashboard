import { ActionIcon, Avatar, Box, Text } from '@mantine/core';
import React from 'react';
import { Logout } from 'tabler-icons-react';

type UserGroupProps = {
  fullWidth?: boolean;
};

const UserGroup = ({ fullWidth }: UserGroupProps) => {
  return (
    <Box
      sx={{
        gap: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: fullWidth ? 'space-between' : 'unset',
      }}
    >
      <Box
        sx={{
          gap: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: fullWidth ? 'space-between' : 'unset',
        }}
      >
        <Avatar src={'https://github.com/mhmdbhsk.png'} alt='Muhammad Bhaska' />

        <Box>
          <Text size='md'>Muhammad Bhaska</Text>
          <Text size='sm' color='dimmed'>
            Admin
          </Text>
        </Box>
      </Box>

      <ActionIcon>
        <Logout size={20} />
      </ActionIcon>
    </Box>
  );
};

export default UserGroup;
