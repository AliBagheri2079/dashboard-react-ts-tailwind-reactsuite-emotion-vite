import Animation from 'rsuite/Animation';
import Placeholder from 'rsuite/Placeholder';

const ShopCardPlaceholder = () => {
  return (
    <Animation.Bounce in={true}>
      <Placeholder.Paragraph
        style={{ marginTop: 30 }}
        rows={5}
        graph="image"
        active
      />
    </Animation.Bounce>
  );
};

export default ShopCardPlaceholder;
