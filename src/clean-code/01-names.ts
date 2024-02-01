(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fileToEvaluate = [
        { id: 1, toDelete: false },
        { id: 2, toDelete: false },
        { id: 3, toDelete: true },
        { id: 4, toDelete: false },
        { id: 5, toDelete: false },
        { id: 7, toDelete: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = fileToEvaluate.map( file => file.toDelete );

    // Bad names
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const todayDate = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const filesNumber = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;


})();