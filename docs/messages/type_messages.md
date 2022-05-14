# Services and events

## STR time control

-   **STR_1**: FI request the STR opening hours
    -   Must be used to consult the STR opening hours and the allowed systems to use STR
-   **STR_17**: STR send message about opening market

## Transfers between Financial Institutions on your own

-   **STR_3**: FI request cash transfer settlement
    -   It is intended for the FI to request money transfer settlement to meet the need for agencies
-   **STR_4**: FI request transfer to FI
    -   The purpose of the FI is to request the transfer of funds between financial institutions resulting from operations under its responsibility or those of third parties.
-   **STR_39**: FI request transfer to early settlement of credit operation
-   **STR_40**: FI request transfer to FI of the correspondent bank operation or agreement
-   **STR_47**: FI request portability of credit operation

## Transfers between Financial Institutions on behalf of the customer

-   **STR_5**: FI request transfer on behalf of non-account holders
    -   The FI request the transfer of funds on behalf of non-account holders, for credit from customers or non-account holders.
-   **STR_6**: FI resquest transfer of client to FI
    -   The FI requests the transfer of funds from the client, account holder or not, to another financial institution.
-   **STR_7**: FI request FI transfer to customer account
    -   FI requests the transfer of funds to a customer's account at another financial institution
-   **STR_8**: FI request transfer between customer accounts
    -   FI requests the transfer of funds between customer's accounts
-   **STR_25**: FI request transfer to judicial deposit (blocking)
-   **STR_34**: FI request transfer between customer account and an institution that does not hold bank reserve or settlement accounts
-   **STR_37**: FI request transfer involving salary account
-   **STR_41**: FI request transfer to consignment credit in FI that has a relationship with a retiree
-   **STR_51**: FI request the liberation of judicial deposit (unblocking)

## Transfer by pass-through

-   **STR_20**: FI request transfer by pass-through to state taxes
-   **STR_21**: FI request transfer by pass-through to FGTS
-   **STR_22**: FI request transfer by pass-through to FCVS
-   **STR_26**: FI request transfer to settlement of document with bar code
-   **STR_29**: FI request transfer by pass-through to other taxes
-   **STR_33**: FI request transfer to FGTS settlement
-   **STR_45**: FI request transfer for transfer of tax revenues to centralizing FI

## Transfer returns

-   **STR_10**: FI request to return of improper transfer
    -   The FI requests the transfer for the return of funds improperly transferred by another financial institution or in the situation where the destination FI cannot fulfill them.
-   **STR_46**: FI request to return of transfer by pass-through of tax revenues
-   **STR_48**: FI request to return of improper portability of credit operation

## Cancellation of pending entries

-   **STR_11**: FI request cancellation of pending entries on STR
    -   FI requests cancellation of transfer entry commanded in STR that is pending settlement due to insufficient balance or by scheduling

## Request release query

-   **STR_12**: FI request entries
    -   See entries recorded from the start date and time provided with your final status
-   **STR_13**: FI request balance
    -   Consult balance of reserve account or settlement account
-   **STR_14**: FI request extract
    -   See the extract of all postings made after a certain time
-   **STR_35**: FI request billing extract from the STR

## STR warnings

-   **STR_15**: STR warn about the closing market
-   **STR_16**: STR inform the closing balance
    -   For the STR to inform the participant, holder of the bank reserve account or of the settlement accounts account, the balance of the accounts of accounts maintained at the close of the market.
-   **STR_18**: STR warn about exclusion of participant
-   **STR_19**: STR warn about inclusion or changes in participant
-   **STR_30**: STR inform about aptitude for opening
-   **STR_31**: STR warn SELIC that FI is in contingency mode
-   **STR_32**: STR warn SELIC that FI is not in contingency mode
-   **STR_42**: STR warn about start or end of optimization
-   **STR_50**: STR request the start of RDC closing

## STR contingency

-   **STR_43**: Participant request scheduling to contingency test
-   **STR_44**: Participant request cancellation of contingency test
