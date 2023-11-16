import {atom} from 'jotai';
import {ThemeMode} from '../ui/enum/ThemeMode';

const themeModeAtom = atom<ThemeMode>(ThemeMode.Dark);

export {themeModeAtom};
