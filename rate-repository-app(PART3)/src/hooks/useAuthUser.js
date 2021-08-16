import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthUser = () => {
  const { data, loading, error } = useQuery(
      GET_AUTHORIZED_USER, { fetchPolicy: 'cache-and-network' });
    
  if (data){
    return { authorizedUser: data.authorizedUser, loading, error };
  }
  else{
    return { authorizedUser: data, loading, error};
  }
};

export default useAuthUser;