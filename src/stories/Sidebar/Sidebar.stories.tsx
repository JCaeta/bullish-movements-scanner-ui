import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
 
export default {
    title: "components/Sidebar",
    component: Sidebar ,
    argTypes: {},
} as Meta<typeof Sidebar >;

type Story = StoryObj<typeof Sidebar >;

export const Common: Story = {
    render: () =>{
        return(<>
            <Sidebar/>
        </>);
    } 
};


