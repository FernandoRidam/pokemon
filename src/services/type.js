import api from '../config/api';

export async function getTypes() {
  const { data } = await api.get('/type');

  return { success: true, message: 'Sucesso!', data };
};
