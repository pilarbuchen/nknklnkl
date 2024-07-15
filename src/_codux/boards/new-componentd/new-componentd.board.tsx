import { NewComponentd } from '../../../components/new-componentd/new-componentd';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
    name: 'NewComponentd',
    Board: () => (
        <ComponentWrapper settings={{}}>
            <ContentSlot>
                <NewComponentd />
            </ContentSlot>
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: { right: 0, bottom: 0, left: 0, top: 0 },
    },
});
