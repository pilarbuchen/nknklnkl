import { Aaaaaa } from '../../../components/aaaaaa/aaaaaa';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';
import commonStylesStyles from '../../../styles/common-styles.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Aaaaaa',
    Board: () => (
        <ComponentWrapper settings={{}}>
            <ContentSlot>
                <Aaaaaa
                    className={Classnames(
                        commonStylesStyles.price,
                        commonStylesStyles['intro-button'],
                    )}
                />
            </ContentSlot>
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: { right: 0, bottom: 0, left: 0, top: 0 },
    },
});
