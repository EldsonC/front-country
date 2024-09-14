import { Card } from "./styled";
import { useNavigate } from "react-router-dom";

interface CardProps {
  name: string;
  code: string;
}

export function CardComponent({ name, code }: CardProps) {
  const navigate = useNavigate();


  const sendToDetails = (code: string) => {
    navigate(`country/${code}`)
  }

  return (
    <Card onClick={() => sendToDetails(code)}>
      <span>{name}</span>
    </Card>
  );
}