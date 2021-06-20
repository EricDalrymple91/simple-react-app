import React, {useState} from "react";
import styled from "styled-components";
import {
    Button as UnstyledButton,
    H1,
    InputGroup,
} from "@blueprintjs/core";

const PaddedDiv = styled.div`
    padding: 10px;
`

const BorderDiv = styled.div`
    border: 2px solid #137CBD;
`

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
  padding: 10px;
  height: 80px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  align-items: center;
`;

const Button = styled(UnstyledButton)`
  margin-left: 8px;
`;

const HeaderSection = () => {

    const [name, setName] = useState('Your Account Name');
    const [isEditingName, setIsEditingName] = useState(false);
    const [editedName, setEditedName] = useState(name)

    const [accountNumber, setAccountNumber] = useState(123456);

    return (
        <PaddedDiv>
            <BorderDiv>
                <Header>
                    {/* Account Name */}
                    {!isEditingName && (
                        <RowContainer>
                            <H1>{name} (#{accountNumber})</H1>
                            <Button icon="edit" onClick={() => setIsEditingName(true)}>
                                Edit
                            </Button>
                        </RowContainer>
                    )}
                    {isEditingName && (
                        <RowContainer>
                            <InputGroup 
                                value={editedName}
                                onChange={(event) => setEditedName(event.target.value)}
                            />

                            <Button icon="tick" onClick={() => {
                                setName(editedName);
                                setIsEditingName(false);
                            }}>
                                Submit
                            </Button>

                            <Button icon="cross" onClick={() => setIsEditingName(false)}>
                                Cancel
                            </Button>
                        </RowContainer>
                    )}

                    {/* Top Right Button */}
                    {
                        <div>
                            <Button icon="random" onClick={() => setAccountNumber(Math.floor(100000 + Math.random() * 900000))}>
                                Reset Account #
                            </Button>
                        </div>
                    }
                </Header>

            </BorderDiv>
        </PaddedDiv>
    )
}

export default HeaderSection;