import { gql } from "@apollo/client";

export const GET_TESTS_QUERY = gql`
  query Tests($where: TestWhereInput) {
    tests(where: $where) {
      id
      data
      userKey
    }
  }
`;
