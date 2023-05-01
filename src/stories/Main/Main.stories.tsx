
import { Meta, StoryObj } from "@storybook/react";
import { Main } from "../../components/Main/Main";

export default {
    title: "components/Main",
    component: Main ,
    argTypes: {},
} as Meta<typeof Main >;

type Story = StoryObj<typeof Main >;

export const Primary: Story = {
    render: () =>{
        return(<>
            <Main/>
        </>);
    } 
};