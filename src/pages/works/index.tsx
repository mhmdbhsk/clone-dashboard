import AppLayout from '@/components/layout/app/AppLayout';
import { worksService } from '@/services/works';
import type { NextPage } from 'next';
import useSWR from 'swr';
import { Box, Skeleton, Text, createStyles } from '@mantine/core';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardWork: {
    cursor: 'pointer',
    padding: 16,
    borderRadius: 8,
    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#fff',
  },
}));

const Works: NextPage = () => {
  const { classes } = useStyles();
  const { data: WorksList } = useSWR('works_list', worksService.getWorksList);
  const router = useRouter();

  console.log(WorksList);

  return (
    <AppLayout title='Works'>
      {!WorksList ? (
        <Box className={classes.contentWrapper}>
          <Skeleton height={50} radius={'md'} />
          <Skeleton height={50} radius={'md'} />
          <Skeleton height={50} radius={'md'} />
        </Box>
      ) : (
        <Box className={classes.contentWrapper}>
          {WorksList.map((work) => (
            <Box
              key={work.id}
              onClick={() => router.push(`works/${work.id}`)}
              className={classes.cardWork}
            >
              <Text className={classes.cardTitle}>{work.workName}</Text>
            </Box>
          ))}
        </Box>
      )}
    </AppLayout>
  );
};

export default Works;
