import { AppShell, Container } from '@mantine/core';
import { useState } from 'react';
import { ReactNode } from 'react';
import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';

type AppLayoutProps = {
  children: ReactNode;
  title?: string;
};

const AppLayout = ({ children, title }: AppLayoutProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  const handleOpen = () => setOpened((oldState) => !oldState);

  return (
    <AppShell
      padding={0}
      navbarOffsetBreakpoint='md'
      asideOffsetBreakpoint='md'
      fixed
      navbar={<AppNavbar isOpen={opened} />}
      header={
        <AppHeader isOpen={opened} handleOpen={handleOpen} title={title} />
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container size={'xl'} pt={'xl'}>
        {children}
      </Container>
    </AppShell>
  );
};

export default AppLayout;
