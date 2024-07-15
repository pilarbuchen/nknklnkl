import { NewComponent } from '../../../components/new-component/new-component';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
    name: 'NewComponent',
    Board: () => (
        <ComponentWrapper settings={{}}>
            <ContentSlot>
                <NewComponent />
            </ContentSlot>
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: { right: 0, bottom: 0, left: 0, top: 0 },
        windowHeight: 516,
    },
});
