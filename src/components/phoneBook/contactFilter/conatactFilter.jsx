import { ContactsWrapper,LabelContacts,Search,ResetButtons } from "./contatcFilter.styled"

export const Filter = ({ value, changeFilter,onReset }) => {
    
    return (
         <ContactsWrapper>
        <LabelContacts>Find contacts by name
                <Search type='text' name="filter" value={value} onChange={changeFilter} />
                <ResetButtons type="button" onClick={onReset}>Reset filters</ResetButtons>
        </LabelContacts>
        </ContactsWrapper>
    )
}