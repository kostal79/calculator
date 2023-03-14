import { useSelector } from "react-redux";
import ButtonBlock from "../components/ButtonBlock/ButtonBlock";
import Display from "../components/Display/Display";
import EqualBlock from "../components/EqualBlock/EqualBlock";
import OperatorBlock from "../components/OperatorBlock/OperatorBlock";


export const Components = () => {
  const text = useSelector((state) => state.logic.display)
  return {
    display: <Display text={text} />,
    button_block: <ButtonBlock />,
    equal: <EqualBlock />,
    operator_block: <OperatorBlock />,
  }
};