import { Card } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem({
  id,
  name,
  price,
  imgUrl
}: StoreItemProps) {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          height="200px"
          src={imgUrl}
          style={{ objectFit: "cover" }}
        />
      </Card>
    </>
  );
}

export { StoreItem };
