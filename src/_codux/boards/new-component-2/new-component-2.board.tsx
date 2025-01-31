import { NewComponent2 } from '../../../components/new-component-2/new-component-2';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
    name: 'NewComponent2',
    Board: () => (
        <ComponentWrapper settings={{}}>
            <ContentSlot>
                <NewComponent2 />
            </ContentSlot>
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: { right: 0, bottom: 0, left: 0, top: 0 },
    },
});
