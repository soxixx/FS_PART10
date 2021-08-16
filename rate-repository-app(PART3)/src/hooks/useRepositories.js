import { useQuery } from '@apollo/client';
import { GET_ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, error } = useQuery(
    GET_ALL_REPOSITORIES, { fetchPolicy: 'cache-and-network' });
    
  if (data){
    return { repositories: data.repositories, loading, error };
  }
  else{
    return { repositories: data, loading, error};
  }
};

export default useRepositories;