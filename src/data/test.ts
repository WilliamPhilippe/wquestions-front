import { gql } from "@apollo/client";

export const GET_TESTS_QUERY = gql`
  query Tests($where: TestWhereInput) {
    tests(where: $where) {
      id
      data
      userKey
      createdAt
    }
  }
`;

export const CREATE_TEST_MUTATION = gql`
  mutation CustomCreateTest($data: TestCreateInput!) {
    customCreateTest(data: $data)
  }
`;
