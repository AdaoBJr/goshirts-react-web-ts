import { generateMutationOp } from '../../../generated';
import { InputData } from '../../lib/services/talons/useCreateAccount';

interface createCustomerData {
  data: InputData;
}

export const createCustomerGQL = ({ data }: createCustomerData) =>
  generateMutationOp({
    createCustomer: [{ data }, { customer: { id: true, email: true, firstname: true } }]
  });

// export const signInCustomerGQL = ({ data }) =>
//   generateMutationOp({
//     signInCustomer: [{ data }, { token: true }]
//   });
