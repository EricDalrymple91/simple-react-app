import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {
    Button as UnstyledButton,
    H1,
    HTMLTable
} from "@blueprintjs/core";

const PaddedDiv = styled.div`
    padding: 10px;
`

const Body = styled.div`
    margin-bottom: 8px;
    border: 2px solid #137CBD;
    padding: 10px;
`

const Button = styled(UnstyledButton)`
  margin-left: 8px;
`;

const TableDiv = styled.div`
    width: 100%;
`

const Table = styled(HTMLTable)`
  white-space: nowrap;
  min-width: 100%;
`;

const TH = styled.th`
    border: 1px solid;
    text-align: left;
    padding: 6px;
    background-color: #394B59;
    color: white;
`;

const TD = styled.td`
    border: 1px solid;
    text-align: left;
    padding: 6px;
    word-wrap: break-word;
`

const BodySection = () => {

    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    // Mock data using https://jsonplaceholder.typicode.com/
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);


    return (
        <PaddedDiv>
            <Body>
                {/* Mock data */}
                <div>
                    <Button onClick={() => setResourceType('posts')} icon="data-lineage">Data</Button>
                    <Button onClick={() => setResourceType('users')} icon="user">Contacts</Button>
                </div>

                {/* Data */}
                {items.length > 0 && resourceType === 'posts' && Object.keys(items[0]).includes("title") && (
                    <TableDiv>
                        <H1>Data</H1>
                        <Table>
                            <thead>
                                <tr>
                                    <TH>User ID</TH>
                                    <TH>ID</TH>
                                    <TH>Title</TH>
                                    <TH>Body</TH>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr key={item.id}>
                                        <TD>{item.userId}</TD>
                                        <TD>{item.id}</TD>
                                        <TD>{item.title.slice(0, 20)}</TD>
                                        <TD>{item.body.slice(0, 20)}</TD>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </TableDiv>
                )}

                {/* Contacts */}
                {items.length > 0 && resourceType === 'users' && Object.keys(items[0]).includes("address") && (
                    <TableDiv>
                        <H1>Contacts</H1>
                        <Table>
                            <thead>
                                <tr>
                                    <TH>ID</TH>
                                    <TH>Name</TH>
                                    <TH>Email</TH>
                                    <TH>Phone</TH>
                                    <TH>website</TH>
                                    <TH>City</TH>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr key={item.id}>
                                        <TD>{item.id}</TD>
                                        <TD>{item.name}</TD>
                                        <TD>{item.email}</TD>
                                        <TD>{item.phone}</TD>
                                        <TD>{item.website}</TD>
                                        <TD>{item.address.city}</TD>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </TableDiv>
                )}

            </Body>
        </PaddedDiv>
    )
}

export default BodySection;