import handlerResponse from '../../libs/response';

export const get = async (event) => {
  try {
  } catch (err) {
    return handlerResponse(500, err.message ?? '');
  }
};
