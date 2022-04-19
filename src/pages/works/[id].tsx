/* eslint-disable react-hooks/rules-of-hooks */
import AppLayout from '@/components/layout/app/AppLayout';
import { worksService } from '@/services/works';
import type { NextPage } from 'next';
import useSWR from 'swr';
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  createStyles,
  Grid,
  Pagination,
  Skeleton,
  Table,
  Tabs,
  Text,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { ArrowLeft, Dots, Pencil } from 'tabler-icons-react';
import StyledTabs from '@/components/StyledTabs';
import { Appointment } from '@/types/works';
import { useDayFormatter } from '@/hooks/use-day-formatter';

const useStyles = createStyles(() => ({
  contentWrapper: {
    margin: 0,
    padding: 30,
    marginTop: 32,
    background: '#fff',
    borderRadius: 12,
  },
  titleItem: {
    fontSize: 14,
    fontWeight: 500,
    opacity: 0.8,
  },
  valueItem: {
    fontSize: 14,
    fontWeight: 700,
  },
  listItem: {
    padding: 28,
    background: 'white',
    borderRadius: 12,
  },
  listItemGrid: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
  },
  badge: {
    padding: 12,
    textTransform: 'capitalize',
  },
  tableHead: {
    padding: '20px 28px',
    margin: 0,
    fontWeight: 500,
  },
  paginationItem: {
    background: 'transparent',
    border: 'none',
  },
  paginationItemActive: {
    background: '#3973FF',
  },
}));

const Works: NextPage = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const { data: WorkData } = useSWR(`works_data`, () =>
    worksService.getWorkById(router.query.id as string)
  );

  console.log(WorkData);

  const appointmentRows = WorkData?.appointment.map(
    (element: Appointment, index: number) => (
      <Box
        className={classes.listItem}
        sx={{
          marginBottom: WorkData?.appointment.length === index - 1 ? 0 : 12,
        }}
        key={element.id}
        component={Grid.Col}
        span={22}
      >
        <Grid columns={22}>
          <Grid.Col span={4} className={classes.listItemGrid}>
            {element.name}
          </Grid.Col>
          <Grid.Col span={4} className={classes.listItemGrid}>
            {element.customer}
          </Grid.Col>
          <Grid.Col span={4} className={classes.listItemGrid}>
            {useDayFormatter(element.startDate)}
          </Grid.Col>
          <Grid.Col span={4} className={classes.listItemGrid}>
            {useDayFormatter(element.endDate)}
          </Grid.Col>
          <Grid.Col span={4} className={classes.listItemGrid}>
            <Badge
              color={
                element.status === 'CREATED'
                  ? 'green'
                  : element.status === 'PROCESSED'
                  ? 'yellow'
                  : element.status === 'CALCULATED'
                  ? 'blue'
                  : 'red'
              }
              variant='light'
              className={classes.badge}
            >
              {element.status.toLocaleLowerCase()}
            </Badge>
          </Grid.Col>
          <Grid.Col span={2} className={classes.listItemGrid}>
            <ActionIcon>
              <Dots />
            </ActionIcon>
          </Grid.Col>
        </Grid>
      </Box>
    )
  );

  return (
    <AppLayout title='Work Details'>
      <Button
        leftIcon={<ArrowLeft size={16} />}
        variant='subtle'
        color={'dark'}
        onClick={() => router.back()}
      >
        Back
      </Button>

      {!WorkData ? (
        <Skeleton height={200} sx={{ marginTop: 32 }} radius={12} />
      ) : (
        <Grid columns={25} className={classes.contentWrapper}>
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col
                span={6}
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Text className={classes.titleItem}>Work Name</Text>
                <Text>:</Text>
              </Grid.Col>
              <Grid.Col span={6} className={classes.valueItem}>
                {WorkData.workName}
              </Grid.Col>
              <Grid.Col
                span={6}
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Text className={classes.titleItem}>Price</Text>
                <Text>:</Text>
              </Grid.Col>
              <Grid.Col span={6} className={classes.valueItem}>
                {WorkData.price}
              </Grid.Col>
              <Grid.Col
                span={6}
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Text className={classes.titleItem}>Unit</Text>
                <Text>:</Text>
              </Grid.Col>
              <Grid.Col span={6}>{WorkData.unit}</Grid.Col>
              <Grid.Col
                span={6}
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Text className={classes.titleItem}>Status</Text>
                <Text>:</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Badge
                  color={WorkData.status === 'ACTIVE' ? 'green' : 'red'}
                  variant='light'
                  className={classes.badge}
                >
                  {WorkData.status}
                </Badge>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col
                span={6}
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Text className={classes.titleItem}>Description</Text>
                <Text>:</Text>
              </Grid.Col>
              <Grid.Col span={6} sx={{ fontSize: 14 }}>
                {WorkData.description}
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={1}>
            <ActionIcon>
              <Pencil size={16} />
            </ActionIcon>
          </Grid.Col>
        </Grid>
      )}

      <Box
        sx={{
          margin: '32px 0',
        }}
      >
        <StyledTabs>
          <Tabs.Tab label='Appointment'>
            <Box>
              {!WorkData ? (
                <Skeleton height={200} sx={{ marginTop: 32 }} radius={12} />
              ) : (
                <Box>
                  <Box
                    component={Grid}
                    columns={22}
                    className={classes.tableHead}
                  >
                    <Grid.Col span={4}>Appointment</Grid.Col>
                    <Grid.Col span={4}>Customer</Grid.Col>
                    <Grid.Col span={4}>Start Date</Grid.Col>
                    <Grid.Col span={4}>End Date</Grid.Col>
                    <Grid.Col span={4}>Status</Grid.Col>
                    <Grid.Col span={2} />
                  </Box>
                  <Box
                    component={Grid}
                    gutter={'xl'}
                    columns={22}
                    sx={{ margin: 0 }}
                  >
                    {appointmentRows}
                  </Box>
                </Box>
              )}
            </Box>
          </Tabs.Tab>
          <Tabs.Tab label='Employee' />
          <Tabs.Tab label='Invoices' />
        </StyledTabs>
      </Box>

      <Box sx={{ margin: 24, display: 'flex', justifyContent: 'center' }}>
        <Pagination
          total={15}
          boundaries={2}
          radius='md'
          classNames={{
            item: classes.paginationItem,
            active: classes.paginationItemActive,
          }}
        />
      </Box>
    </AppLayout>
  );
};

export default Works;
