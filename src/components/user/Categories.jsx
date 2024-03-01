import axios from 'axios';
import { useQuery } from 'react-query';
import Category from './Category';

export default function Categories() {


  const getCategories = async () => {
    let { data } = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
    data = data.filter(x => x.id <= 5);
    return data;
  }

  const { data, isLoading } = useQuery('categories_cash', getCategories);


  if (isLoading) {
    return (
      <div className="page-loader d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border text-dark" role="status">
        </div>
      </div>
    )
  }

  const renderCategories = data.map((category, index) => (
    <Category idx={index} name={category.name} image={category.image} id={category.id} />
  ))
  
  return (
    <div className="container mt-3">
      <div className="row justify-content-between">
        <h2 className="text-center mb-4">Categories</h2>
        {renderCategories}
      </div>
    </div>
  )
}
