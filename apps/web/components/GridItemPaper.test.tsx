import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import GridItemPaper from './GridItemPaper';

describe('GridItemPaper', () => {
    it('displays title', async () => {
        const title = 'testTitle';

        render(<GridItemPaper title={title} />);

        screen.getByText(title);
    });

    it('displays description', async () => {
        const title = 'testTitle';
        const description = 'testDescription';

        render(<GridItemPaper title={title} description={description} />);

        screen.getByText(description);
    });

    it('displays descriptionRaw', async () => {
        const title = 'testTitle';
        const descriptionRawText = 'testDescriptionRaw';
        const descriptionRawFunction = () => {
            return <>{descriptionRawText}</>;
        };
        const descriptionRaw = descriptionRawFunction();

        render(<GridItemPaper title={title} descriptionRaw={descriptionRaw} />);

        screen.getByText(descriptionRawText);
    });

    it('only displays descriptionRaw when both description and descriptionRaw are present', async () => {
        const title = 'testTitle';
        const description = 'testDescription';
        const descriptionRawText = 'testDescriptionRaw';
        const descriptionRawFunction = () => {
            return <>{descriptionRawText}</>;
        };
        const descriptionRaw = descriptionRawFunction();

        render(<GridItemPaper title={title} description={description} descriptionRaw={descriptionRaw} />);

        screen.getByText(descriptionRawText);
        expect(screen.queryByText(description)).toBeNull();
    });

    it('displays icon', async () => {
        const title = 'testTitle';
        const iconText = 'testIcon';
        const iconFunction = () => {
            return <>{iconText}</>;
        };
        const icon = iconFunction();

        render(<GridItemPaper title={title} icon={icon} />);

        screen.getByText(iconText);
    });
});
