import { createStyles, Input } from '@mantine/core';
import { Search } from 'tabler-icons-react';

const useStyles = createStyles(() => ({
  searchBox: {
    borderRadius: '999px !important',
    padding: '2px 16px ',
  },
}));

const SearchBar = () => {
  const { classes } = useStyles();
  return (
    <Input
      classNames={{ filledVariant: classes.searchBox }}
      variant='filled'
      rightSection={<Search size={14} color='#363636' />}
      placeholder='Search...'
    />
  );
};

export default SearchBar;
