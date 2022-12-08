import Header from 'rsuite/Header';
import TagPicker from 'rsuite/TagPicker';

const tags = ['Eugenia', 'Bryan', 'Linda', 'Julia', 'Albert'].map((item) => ({
  label: item,
  value: item,
}));

const TagSelect = () => {
  return (
    <Header style={{ marginBlock: '10px' }}>
      <TagPicker size="md" placeholder="Placeholder" data={tags} block />
    </Header>
  );
};

export default TagSelect;
