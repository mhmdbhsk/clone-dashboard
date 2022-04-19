import React from 'react';
import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  createStyles,
  Header,
  Input,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { Bell, Help, InfoCircle, Logout, Search } from 'tabler-icons-react';
import { useMediaQuery } from '@mantine/hooks';
import UserGroup from '@/components/UserGroup';
import SearchBar from '@/components/SearchBar';

type AppHeaderProps = {
  isOpen: boolean;
  handleOpen: () => void;
  title?: string;
};

const useStyles = createStyles((theme) => ({
  actionButton: {
    padding: 8,
    width: 40,
    height: 40,
    color: '#363636',
    background: '#f1f3f5',
  },
}));

const AppHeader = ({ isOpen, handleOpen, title }: AppHeaderProps) => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const lessThanMd = useMediaQuery('(max-width: 992px)');

  console.log(lessThanMd);

  return (
    <Header height={100} p={lessThanMd ? 'xl' : 'md'}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <MediaQuery largerThan='md' styles={{ display: 'none' }}>
          <Burger
            opened={isOpen}
            onClick={handleOpen}
            size='sm'
            color={theme.colors.gray[6]}
            mr={'xl'}
          />
        </MediaQuery>
        <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
          <Box
            sx={{ width: 284, display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <Text weight={700}>Dashboard</Text>
          </Box>
        </MediaQuery>
        <Box
          sx={{
            paddingLeft: lessThanMd ? 0 : 16,
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <Box style={{ width: lessThanMd ? '100%' : '20%' }}>
            <Text weight={700} sx={{ fontSize: 24 }}>
              {title}
            </Text>
          </Box>

          <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
            <Box sx={{ width: '30%' }}>
              <SearchBar />
            </Box>
          </MediaQuery>

          <Box sx={{ gap: 20, display: 'flex' }}>
            <ActionIcon className={classes.actionButton} radius={999}>
              <Help />
            </ActionIcon>
            <ActionIcon className={classes.actionButton} radius={999}>
              <InfoCircle />
            </ActionIcon>
            <ActionIcon className={classes.actionButton} radius={999}>
              <Bell />
            </ActionIcon>
          </Box>

          <MediaQuery smallerThan='md' styles={{ display: 'none !important' }}>
            <Box>
              <UserGroup />
            </Box>
          </MediaQuery>
        </Box>
      </Box>
    </Header>
  );
};

export default AppHeader;
