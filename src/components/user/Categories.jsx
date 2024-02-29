import axios from 'axios';
import { useQuery } from 'react-query';

export default function Categories() {


  const getCategories = async () => {
    let { data } = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
    return data;
  }

  const {data, isLoading} = useQuery('categories_cash', getCategories);

  if (isLoading) {
    return (
      <div className="page-loader d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <div className="container mt-3">
      <div className="row justify-content-between">
        <h2 className="text-center mb-4">Categories</h2>
        {data.map((category, index) => (
          <div key={index} className="col-lg-2 col-md-4 col-sm-6 text-center">
            <img
              src={category.image}
              alt={category.name}
              className="img-fluid rounded-circle mb-2"
              style={{ width: '100px', height: '100px' }}
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
