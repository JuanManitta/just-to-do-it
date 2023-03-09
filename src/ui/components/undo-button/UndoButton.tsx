import { Button } from '@mui/material'


interface UndoButtonProps {
    handleUndoCompleteTask: () => void;
    handleUndoDeleteTask: () => void;
    snackbarType: string;
}

export const UndoButton: React.FC<UndoButtonProps> = ({handleUndoCompleteTask, handleUndoDeleteTask, snackbarType}) => {

    
  return (
    <Button
        onClick={snackbarType === 'completed' ? handleUndoCompleteTask : handleUndoDeleteTask}
        color='primary' size='small'>
        UNDO
    </Button>
  );
};
