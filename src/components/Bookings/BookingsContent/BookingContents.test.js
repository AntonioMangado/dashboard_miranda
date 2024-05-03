import { render } from "@testing-library/react";

import { Button } from "../../../styledComponents/Button";

describe ("styledButton", () => {
    test("renders an appropriate button according to its prop", () => {
        const {container} = render(
                <div>
                    <Button $success>Click me</Button>
                    <Button $error>Click me</Button>
                    <Button $warning>Click me</Button>
                </div>
                );

        const buttonElementSuccess = container.querySelectorAll("button")[0];
        const buttonElementError = container.querySelectorAll("button")[1];
        const buttonElementWarning = container.querySelectorAll("button")[2];
        const styleSuccess = window.getComputedStyle(buttonElementSuccess);
        const styleError = window.getComputedStyle(buttonElementError);
        const styleWarning = window.getComputedStyle(buttonElementWarning);

        expect(styleSuccess.backgroundColor).toBe("rgb(232, 255, 238)");
        expect(styleSuccess.color).toBe("rgb(90, 208, 122)");
        expect(styleError.backgroundColor).toBe("rgb(255, 237, 236)");
        expect(styleError.color).toBe("rgb(226, 52, 40)");
        expect(styleWarning.backgroundColor).toBe("rgb(255, 247, 229)");
        expect(styleWarning.color).toBe("rgb(255, 168, 0)");
    }
    )
});