import Link from 'next/link';

const AddMealButton = () => {
  return (
    <Link href="/mealDashboard/AddFood">
      <button>Add New Meal Plan</button>
    </Link>
  );
};

export default AddMealButton;
