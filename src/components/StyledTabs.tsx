import { TabsProps, Tabs } from '@mantine/core';

const StyledTabs = (props: TabsProps) => {
  return (
    <Tabs
      variant='unstyled'
      styles={(theme) => ({
        tabsListWrapper: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          borderRadius: 6,
          padding: `16px 0px`,
        },
        tabControl: {
          height: 18,
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.gray[6],
          fontSize: 14,
          borderRight: `1px solid ${
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.gray[2]
          }`,
          paddingRight: `36px`,
          paddingLeft: `36px`,

          // '&:not(:first-of-type)': {
          //   borderLeft: 0,
          // },

          '&:first-of-type': {
            borderRight: `1px solid ${
              theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[2]
            }`,
          },

          '&:last-of-type': {
            borderRight: 'none',
          },
        },

        tabActive: {
          fontWeight: 'bold',
          color: '#000',
        },
      })}
      {...props}
    />
  );
};

export default StyledTabs;
