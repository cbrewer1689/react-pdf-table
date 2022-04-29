import * as React from "react";
import { TableRowProps } from "./TableRow";
export interface TableHeaderProps extends TableRowProps {
    children: React.ReactNode;
}
export declare class TableHeader extends React.PureComponent<TableHeaderProps> {
    render(): JSX.Element;
}
