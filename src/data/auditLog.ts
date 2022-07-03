import { gql } from "@apollo/client";

export const CREATE_AUDIT_LOG = gql`
  mutation CreateAuditLog($data: AuditLogCreateInput!) {
    createAuditLog(data: $data) {
      id
    }
  }
`;
