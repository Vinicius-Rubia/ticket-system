export const ETicketStatus = {
  NEW_TICKET: 1,
  ON_GOING_TICKET: 2,
  RESOLVED_TICKET: 3,
} as const;

export type TicketStatusValue =
  (typeof ETicketStatus)[keyof typeof ETicketStatus];
export type TicketStatusKey = keyof typeof ETicketStatus;
