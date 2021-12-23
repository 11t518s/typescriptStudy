{
    // Intersection Types : and같은 개념

    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        id: number;
        work: () => void;
    }

    function internWork(person: Student & Worker) {
        console.log(person.name, person.id, person.work())
    }

    internWork({
        name: 'bong',
        score: 1,
        id: 1,
        work: () => {}
    })
}