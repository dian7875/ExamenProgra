import { Tiket } from "../Types/Ticket";

const useConfirmTravel = () => {

  const onSubmit = async (data: Tiket) => {
        console.table(data)
      } 
  return {
    onSubmit,
  };
};

export default useConfirmTravel;
