import { CategoryTypes } from '@/app/components/TicketCard';
import TicketForm from '@/app/components/TicketForm';

const getTicketById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    throw new Error('Failed to get Ticket');
  }
};

const TicketPage = async ({ params }: any) => {
  const EDITMODE = params.id === 'new' ? false : true;

  let updateTicketData: CategoryTypes;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
  } else {
    updateTicketData = {
      _id: 'new',
      title: '',
      description: '',
      category: '',
      priority: 0,
      progress: 0,
      status: '',
      active: false,
      createdAt: new Date(),
    };
    console.log(updateTicketData);
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
