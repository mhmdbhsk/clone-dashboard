import SearchBar from '@/components/SearchBar';
import UserGroup from '@/components/UserGroup';
import { Box, createStyles, MediaQuery, Navbar } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Dashboard, Report } from 'tabler-icons-react';

type AppNavbarProps = { isOpen: boolean };

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    textDecoration: 'none',
    borderTopLeftRadius: theme.radius.md,
    borderBottomLeftRadius: theme.radius.md,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 0 0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginLeft: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: '44px',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  linkActive: {
    '&, &:hover': {
      borderLeftColor:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
      color: theme.white,
    },
  },
}));

const navLinks = [
  { id: 1, path: '/', title: 'Home', icon: <Dashboard /> },
  { id: 2, path: '/works', title: 'Works', icon: <Report /> },
];

const AppNavbar = ({ isOpen }: AppNavbarProps) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState<number>();
  const router = useRouter();

  useEffect(() => {
    navLinks.map((link) => {
      router.asPath.includes(link.path) && setActive(link.id);
    });
  }, [router.asPath]);

  console.log(router.asPath);

  const links = navLinks.map((link) => {
    return (
      <Box
        className={cx(classes.link, {
          [classes.linkActive]: active === link.id,
        })}
        onClick={(event: SyntheticEvent) => {
          router.push(link.path);
          setActive(link.id);
        }}
        key={link.id}
      >
        {link.icon}
        {link.title}
      </Box>
    );
  });

  return (
    <Navbar
      py='lg'
      width={{ md: 300, lg: 300 }}
      hiddenBreakpoint='md'
      hidden={!isOpen}
    >
      <Navbar.Section grow className={classes.wrapper}>
        {links}
      </Navbar.Section>
      <Navbar.Section>
        <MediaQuery largerThan='md' styles={{ display: 'none' }}>
          <Box
            sx={{
              padding: '24px 24px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <SearchBar />

            <UserGroup fullWidth />
          </Box>
        </MediaQuery>
      </Navbar.Section>
    </Navbar>
  );
};

export default AppNavbar;
