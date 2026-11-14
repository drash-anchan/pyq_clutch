import { CentralizedArchive, ArchiveSubject, ArchivePaper, ArchiveYear } from '../types/index';

export const CENTRALIZED_ARCHIVE: CentralizedArchive = {
  semester: 3,
  semesterLabel: '3rd Semester',
  examType: 'endsem',
  examTypeLabel: 'End Semester Examinations',
  institute: 'MIT Manipal',
  instituteFullName: 'Manipal Institute of Technology, MAHE',
  tagline: 'Your semester. Your papers. Your unfair advantage.',
  description: 'Verified 3rd-semester Endsem question papers organized subject-wise and year-wise from authentic examinations.',
  githubUrl: 'https://github.com/drash-anchan/pyq_clutch',
  subjects: [
    // ========================================================
    // SUBJECT 1: DATA STRUCTURES (9 Papers)
    // ========================================================
    {
      id: 'data-structures',
      name: 'Data Structures',
      code: 'CSS 2101',
      shortCode: 'CSS 2101',
      aliases: ['DS', 'DSA', 'CSS 2101', 'CSS2101', 'CSE 2122', 'CSE2122', 'ICT 2121', 'ICT 2153'],
      department: 'Computer Science & Engineering',
      credits: 4,
      totalPapersCount: 9,
      availableYears: [2025, 2024, 2023, 2022],
      description: 'Circular queues, AVL balanced trees, Doubly Linked Lists, Threaded Binary Trees, Graph BFS/DFS traversals, and sparse matrix transformations.',
      years: [
        {
          year: 2025,
          title: '2025 Examination Cycle',
          papers: [
            {
              id: 'ds-2025-regular',
              title: 'Data Structures 2025',
              subjectId: 'data-structures',
              subjectName: 'Data Structures',
              subjectCode: 'CSS 2101',
              year: 2025,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-structures/2025/ds-2025-regular.pdf',
              thumbnailUrl: '/thumbnails/ds-2025-regular.png',
              vaultKey: 'vault-ds-2025-regular',
              fileSize: '82.5 KB',
              pageCount: 4,
              dateHeld: '20-Nov-2025',
              topicsCovered: [
                'Module 4: Trees (16M / 32%) — AVL Tree Rotations & Deletion, BST Insertion, Double Threaded Trees, Expression Trees',
                'Module 3: Stacks & Queues (12M / 24%) — Multi-Queue in Array, Undo-Redo Stack Application, Stack Activation Records, Queue Rearrangement',
                'Module 1: Fundamentals (9M / 18%) — Sparse Matrix Fast Transpose (row_terms & starting_pos), Dynamic 2D Arrays, Nested Date Structures',
                'Module 2: Linked Lists (8M / 16%) — Singly Linked List Playlist Filtering, Doubly Linked List Patient Queue',
                'Module 5: Graphs (5M / 10%) — Delivery Hub Network DFS & BFS, Connected Subnetworks, Directed Reachability'
              ],
            },
            {
              id: 'ds-2025-makeup',
              title: 'Data Structures 2025',
              subjectId: 'data-structures',
              subjectName: 'Data Structures',
              subjectCode: 'CSS 2101',
              year: 2025,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-structures/2025/ds-2025-makeup.pdf',
              thumbnailUrl: '/thumbnails/ds-2025-makeup.png',
              vaultKey: 'vault-ds-2025-makeup',
              fileSize: '79.1 KB',
              pageCount: 3,
              dateHeld: '03-Jan-2026',
              topicsCovered: [
                'Module 4: Trees (16M / 32%) — AVL Account Rotations & Deletion, BST Iterative Deletion, Level-Order Traversal, Leaf Node Counting',
                'Module 3: Stacks & Queues (12M / 24%) — Four Stacks in Single Array, Infix-to-Postfix Precedence Functions, Duplicate Parentheses, Priority Queue Concept',
                'Module 1: Fundamentals (9M / 18%) — Sparse Matrix Transpose using Linked List, Dynamic 2D String Arrays, Nested Employee Structures',
                'Module 2: Linked Lists (8M / 16%) — Singly Linked List Reverse Traversal, Doubly Linked List Queue Simulation',
                'Module 5: Graphs (5M / 10%) — Directed Graph Adjacency List, Recursive DFS Traversal, Spanning Tree Verification'
              ],
            }
          ]
        },
        {
          year: 2024,
          title: '2024 Examination Cycle',
          papers: [
            {
              id: 'ds-2024-makeup-cse',
              title: 'Data Structures 2024 Makeup (CSE)',
              subjectId: 'data-structures',
              subjectName: 'Data Structures',
              subjectCode: 'CSE 2122',
              year: 2024,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/data-structures/2024/ds-2024-makeup-cse.pdf',
              thumbnailUrl: '/thumbnails/ds-2024-makeup-cse.png',
              vaultKey: 'vault-ds-2024-makeup-cse',
              fileSize: '75.4 KB',
              pageCount: 3,
              dateHeld: '10-Jan-2024',
              topicsCovered: [
                'Module 4: Trees (20M / 40%) — Structurally Identical Binary Trees & Merge by Summing, BST Construction & Search, Threaded Binary Trees, Level-Order Traversal',
                'Module 1: Fundamentals (12M / 24%) — Ragged Array Dynamic Allocation & Recursive Sort, Employee Nested Structures & Salary Hike, Dangling Pointers',
                'Module 3: Stacks & Queues (7M / 14%) — Queue Reversal, Customer Care Call Center Queue, Postfix-to-Prefix Stack Conversion',
                'Module 5: Graphs (6M / 12%) — Road Network DFS Connectivity (5 Cities), Graph Adjacency List Construction',
                'Module 2: Linked Lists (5M / 10%) — Doubly Linked List Sorted Insertion (sortedInsert), Circular Singly Linked List InsertLast'
              ],
            },
            {
              id: 'ds-2024-makeup-ict',
              title: 'Data Structures 2024 Makeup (ICT)',
              subjectId: 'data-structures',
              subjectName: 'Data Structures',
              subjectCode: 'ICT 2121',
              year: 2024,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/data-structures/2024/ds-2024-makeup-ict.pdf',
              thumbnailUrl: '/thumbnails/ds-2024-makeup-ict.png',
              vaultKey: 'vault-ds-2024-makeup-ict',
              fileSize: '76.8 KB',
              pageCount: 3,
              dateHeld: '05-Jan-2024',
              topicsCovered: [
                'Module 4: Trees (15M / 30%) — Expression Tree Creation & Evaluation, BST Construction & Internal Node Counting, Threaded BST Inorder Predecessor/Successor, Mirror Tree Check',
                'Module 1: Fundamentals & Sparse Matrix (10M / 20%) — Puzzle Board Sparse Matrix Fast Transpose (rowTerms & startingPosition), Array of Pointers Name Sorting',
                'Module 2: Linked Lists (10M / 20%) — Doubly Linked List Last Node Deletion, Singly Linked List Equality & Intersection, Polynomial Addition using SLL',
                'Module 3: Stacks & Queues (10M / 20%) — Integer Stack Sorting using Temporary Stack, Multiple Equal Stacks & Balanced Bracket Verification, Circular Queue Deletion',
                'Module 5: Graphs (5M / 10%) — Graph Drawing from Adjacency Matrix, Adjacency List Representation, Node Degree Computation'
              ],
            }
          ]
        },
        {
          year: 2023,
          title: '2023 Examination Cycle',
          papers: [
            {
              id: 'ds-2023-regular-cse',
              title: 'Data Structures 2023 (CSE)',
              subjectId: 'data-structures',
              subjectName: 'Data Structures',
              subjectCode: 'CSE 2122',
              year: 2023,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-structures/2023/ds-2023-regular-cse.pdf',
              thumbnailUrl: '/thumbnails/ds-2023-regular-cse.png',
              vaultKey: 'vault-ds-2023-regular-cse',
              fileSize: '84.2 KB',
              pageCount: 4,
              dateHeld: '05-Dec-2023',
              topicsCovered: [
                'Module 4: Trees (20M / 40%) — Threaded Binary Tree Insertions & Rationale, BST Multi-Node Insertion & Deletion, Binary Tree Reconstruction (In+Pre / In+Post), Left Child-Right Sibling Representation',
                'Module 1: Fundamentals (12M / 24%) — Dynamic Array Set Operations (BuildSet, SearchSet, Union), Student Nested Structure with Date Pointers, Recursive BinSearch & Array Sum',
                'Module 3: Stacks & Queues (7M / 14%) — Task Priority Queue (enqueueTaskWithPriority, executeHighestPriorityTask), Stack Prefix-to-Postfix Conversion, I/O Interrupt Queue Handling',
                'Module 5: Graphs (6M / 12%) — Graph BFS & DFS Traversal Paths, Adjacency Matrix with In-Degree & Out-Degree',
                'Module 2: Linked Lists (5M / 10%) — Doubly Linked List Character Palindrome Check, Circular Singly Linked List with Header Node (InsertLast)'
              ],
            },
            {
              id: 'ds-2023-regular-dse',
              title: 'Data Structures 2023 (DSE)',
              subjectId: 'data-structures',
              subjectName: 'Data Structures',
              subjectCode: 'CSE 2122',
              year: 2023,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-structures/2023/ds-2023-regular-dse.pdf',
              thumbnailUrl: '/thumbnails/ds-2023-regular-dse.png',
              vaultKey: 'vault-ds-2023-regular-dse',
              fileSize: '81.9 KB',
              pageCount: 4,
              dateHeld: '05-Dec-2023',
              topicsCovered: [
                'Module 4: Trees & B-Trees (23M / 46%) — B-Tree (Order 4) Insertion & Deletion with Reflow State, Heap Sort on Dataset, Binary Tree Reconstruction (Pre+In), Expression Trees',
                'Module 1: Fundamentals & Recursion (10M / 20%) — Towers of Hanoi Recursion Tree (4 Disks), Merge Sort Pseudocode & Trace, Recursive Fibonacci Function',
                'Module 3: Stacks & Queues (10M / 20%) — Infix to Polish (Prefix) Expression Stack Conversion, Circular Queue Enqueue/Dequeue, Prefix/Postfix Evaluation',
                'Module 5: Graphs (5M / 10%) — Minimum Spanning Tree using Kruskal Algorithm for Road Network Cost Optimization',
                'Module 2: Linked Lists (2M / 4%) — Singly vs Doubly Linked List Architecture & Traversal Comparison'
              ],
            },
            {
              id: 'ds-2023-regular-ict',
              title: 'Data Structures 2023 (ICT)',
              subjectId: 'data-structures',
              subjectName: 'Data Structures',
              subjectCode: 'ICT 2121',
              year: 2023,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-structures/2023/ds-2023-regular-ict.pdf',
              thumbnailUrl: '/thumbnails/ds-2023-regular-ict.png',
              vaultKey: 'vault-ds-2023-regular-ict',
              fileSize: '80.6 KB',
              pageCount: 3,
              dateHeld: '30-Nov-2023',
              topicsCovered: [
                'Module 4: Trees (15M / 30%) — BST Construction & Preorder/Inorder/Postorder, Expression Tree Construction (Infix & Prefix), Height vs Depth Distinctions, Binary Tree Copy',
                'Module 3: Stacks & Queues (15M / 30%) — Priority Queue using Circular Doubly Linked List, Iterative Postfix Evaluation using Stack, Two Stacks in Single Array',
                'Module 1: Fundamentals (10M / 20%) — Puzzle Board Sparse Matrix using Singly Linked List (CRUD), Dynamic Array Malloc Pointer Multiplication, Recursive Integer Reverse',
                'Module 2: Linked Lists (5M / 10%) — Singly Linked List Element Frequency Count (SLlist_count) & Search (SLlist_find), Vector Addition using SLL',
                'Module 5: Graphs (5M / 10%) — Adjacency Matrix & Adjacency List Multi-Representation, Depth First Search (DFS) Traversal'
              ],
            },
            {
              id: 'ds-2023-makeup',
              title: 'Data Structures 2023 Makeup',
              subjectId: 'data-structures',
              subjectName: 'Data Structures',
              subjectCode: 'ICT 2153',
              year: 2023,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/data-structures/2023/ds-2023-makeup.pdf',
              thumbnailUrl: '/thumbnails/ds-2023-makeup.png',
              vaultKey: 'vault-ds-2023-makeup',
              fileSize: '74.8 KB',
              pageCount: 3,
              dateHeld: '20-Jan-2023',
              topicsCovered: [
                'Module 4: Trees & Heaps (18M / 36%) — Threaded Binary Tree Types & Morris Traversal, Heap Sort in Descending Order, BST Threaded Memory Representation, Mirror Tree Validation',
                'Module 2: Linked Lists (13M / 26%) — Doubly Linked List Polynomial Subtraction & Evaluation, Circular Linked List Reverse Links & Node Distance, String Linked List',
                'Module 3: Stacks & Queues (9M / 18%) — Movie Theater Multi-Queue Load Balancing, Stack Push & Pop using Singly Linked List, Stack DFS Application',
                'Module 1: Fundamentals (7M / 14%) — Sparse Matrix Multiplication & Normal Transpose, Recursive Array Sum with Time Complexity, Unique Elements in Array',
                'Module 5: Graphs (3M / 6%) — Graph DFS Traversal Tracing from Adjacency Matrix with Source Node A'
              ],
            }
          ]
        },
        {
          year: 2022,
          title: '2022 Examination Cycle',
          papers: [
            {
              id: 'ds-2022-regular',
              title: 'Data Structures 2022',
              subjectId: 'data-structures',
              subjectName: 'Data Structures',
              subjectCode: 'ICT 2153',
              year: 2022,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-structures/2022/ds-2022-regular.pdf',
              thumbnailUrl: '/thumbnails/ds-2022-regular.png',
              vaultKey: 'vault-ds-2022-regular',
              fileSize: '78.9 KB',
              pageCount: 3,
              dateHeld: '08-Dec-2022',
              topicsCovered: [
                'Module 4: Trees & Heaps (20M / 40%) — Max & Min Heap Construction & Heapification Tracing, BST Traversal Construction, Expression Tree Evaluation, Binary Tree Merging & Copy',
                'Module 1: Fundamentals & Matrices (10M / 20%) — Sparse Matrix Addition & Multiplication, Book Inventory Structure/Class, Tabular Step Count Time Complexity, Matrix Multiplication',
                'Module 2: Linked Lists (10M / 20%) — Singly Linked List Reversal after (N/2)-th Node, Circular Singly Linked List Duplicate Detection & Counter-Clockwise Shift',
                'Module 3: Stacks & Queues (7M / 14%) — Multiple Stacks of Variable Sizes in Single Array, Infix to Postfix Conversion Stack Operations',
                'Module 5: Graphs (3M / 6%) — Graph Representation & Depth First Search (DFS) Traversal Counting Odd Nodes'
              ],
            }
          ]
        }
      ]
    },

    // ========================================================
    // SUBJECT 2: DISCRETE MATHEMATICAL STRUCTURES (6 Papers)
    // ========================================================
    {
      id: 'discrete-mathematical-structures',
      name: 'Discrete Mathematical Structures',
      code: 'MAT 2101',
      shortCode: 'MAT 2101',
      aliases: ['DMS', 'MATH', 'DISCRETE', 'MAT 2101', 'MAT2101', 'MAT 2121', 'MAT 2155'],
      department: 'Mathematics & Computer Applications',
      credits: 3,
      totalPapersCount: 6,
      availableYears: [2025, 2024, 2023, 2022],
      description: 'Propositional logic, predicate calculus, set theory relations, lattices and Boolean algebra, recurrence relations, and graph theory proofs.',
      years: [
        {
          year: 2025,
          title: '2025 Examination Cycle',
          papers: [
            {
              id: 'dms-2025-regular',
              title: 'Discrete Mathematical Structures 2025',
              subjectId: 'discrete-mathematical-structures',
              subjectName: 'Discrete Mathematical Structures',
              subjectCode: 'MAT 2101',
              year: 2025,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/discrete-mathematical-structures/2025/dms-2025-regular.pdf',
              thumbnailUrl: '/thumbnails/dms-2025-regular.png',
              vaultKey: 'vault-dms-2025-regular',
              fileSize: '91.4 KB',
              pageCount: 3,
              dateHeld: '18-Nov-2025',
              topicsCovered: [
                'Module 1: Logic & Valid Arguments (CO1 - 10M / 20%) — Propositional Inference Theory, Logical Equivalence, Quantifiers',
                'Module 2: Relations & Lattices (CO2 - 10M / 20%) — Equivalence Relations & Partitions, Hasse Diagrams, Posets & Lattices',
                'Module 3: Combinatorics & Generating Functions (CO3 - 9M / 18%) — Principle of Inclusion-Exclusion, Generating Function Sequences',
                'Module 4: Recurrence Relations (CO4 - 8M / 16%) — Homogeneous Linear Recurrences, Characteristic Equation Roots',
                'Module 5: Graph Theory & Group Theory (CO5/CO6 - 13M / 26%) — Connected Planar Graphs Euler Formula, Hamiltonian Cycles, Groups & Cosets'
              ]
            },
            {
              id: 'dms-2025-makeup',
              title: 'Discrete Mathematical Structures 2025 Makeup',
              subjectId: 'discrete-mathematical-structures',
              subjectName: 'Discrete Mathematical Structures',
              subjectCode: 'MAT 2101',
              year: 2025,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/discrete-mathematical-structures/2025/dms-2025-makeup.pdf',
              thumbnailUrl: '/thumbnails/dms-2025-makeup.png',
              vaultKey: 'vault-dms-2025-makeup',
              fileSize: '89.2 KB',
              pageCount: 3,
              dateHeld: '30-Dec-2025',
              topicsCovered: [
                'Module 1: Logic & Predicate Calculus (10M / 20%) — Quantifier Negation, Rules of Inference, Tautological Implications',
                'Module 2: Lattices & Boolean Algebra (10M / 20%) — Boolean Lattices, Atoms & Complements, Distributive Lattices',
                'Module 4: Recurrence Relations (10M / 20%) — Non-Homogeneous Recurrence Relations, Particular Solutions',
                'Module 5: Graph Theory (10M / 20%) — Isomorphic Graphs, Bipartite Graphs, Chromatic Number',
                'Module 3: Combinatorics & Groups (10M / 20%) — Pigeonhole Principle, Subgroups & Lagrange Theorem'
              ]
            }
          ]
        },
        {
          year: 2024,
          title: '2024 Examination Cycle',
          papers: [
            {
              id: 'dms-2024-regular',
              title: 'Discrete Mathematical Structures 2024',
              subjectId: 'discrete-mathematical-structures',
              subjectName: 'Discrete Mathematical Structures',
              subjectCode: 'MAT 2121',
              year: 2024,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/discrete-mathematical-structures/2024/dms-2024-regular.pdf',
              thumbnailUrl: '/thumbnails/dms-2024-regular.png',
              vaultKey: 'vault-dms-2024-regular',
              fileSize: '86.5 KB',
              pageCount: 2,
              dateHeld: '02-Dec-2024',
              topicsCovered: [
                'Module 3: Combinatorics (10M) — Principle of Inclusion-Exclusion (Divisibility Problems), Pigeonhole Principle',
                'Module 2: Relations (10M) — Warshall Algorithm for Transitive Closure, Equivalence Relations',
                'Module 2: Lattices (10M) — Posets, Hasse Diagrams, Distributive & Complemented Lattices',
                'Module 5: Graph Theory (10M) — Bipartite Graphs, Euler Trails & Circuits, Hamiltonian Paths',
                'Module 5: Group Theory (10M) — Groups, Subgroups, Cosets, Lagrange Theorem'
              ]
            },
            {
              id: 'dms-2024-makeup',
              title: 'Discrete Mathematical Structures 2024 Makeup',
              subjectId: 'discrete-mathematical-structures',
              subjectName: 'Discrete Mathematical Structures',
              subjectCode: 'MAT 2121',
              year: 2024,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/discrete-mathematical-structures/2024/dms-2024-makeup.pdf',
              thumbnailUrl: '/thumbnails/dms-2024-makeup.png',
              vaultKey: 'vault-dms-2024-makeup',
              fileSize: '87.1 KB',
              pageCount: 2,
              dateHeld: '07-Jan-2025',
              topicsCovered: [
                'Module 1: Logic (10M) — Truth Tables & Tautology Verification, Valid Deductions',
                'Module 2: Relations (10M) — Equivalence Classes & Partitions, Partial Order Relations',
                'Module 4: Recurrences (10M) — Linear Recurrence Particular Solutions, Generating Functions',
                'Module 5: Graph Theory (10M) — Chromatic Number, Vertex Coloring, Spanning Trees',
                'Module 3: Combinatorics (10M) — Permutations, Combinations, Binomial Coefficients'
              ]
            }
          ]
        },
        {
          year: 2023,
          title: '2023 Examination Cycle',
          papers: [
            {
              id: 'dms-2023-makeup',
              title: 'Discrete Mathematical Structures 2023 Makeup',
              subjectId: 'discrete-mathematical-structures',
              subjectName: 'Discrete Mathematical Structures',
              subjectCode: 'MAT 2155',
              year: 2023,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/discrete-mathematical-structures/2023/dms-2023-makeup.pdf',
              thumbnailUrl: '/thumbnails/dms-2023-makeup.png',
              vaultKey: 'vault-dms-2023-makeup',
              fileSize: '85.7 KB',
              pageCount: 2,
              dateHeld: '27-Jan-2023',
              topicsCovered: [
                'Module 1: Logic (10M) — Logical Equivalence Proofs without Truth Tables, Quantifiers',
                'Module 3: Functions & Sequences (10M) — Invertible Functions, Generating Function Sequences',
                'Module 5: Graph Theory (10M) — Complete Bipartite Graphs, Planar Graph Characterization',
                'Module 5: Group Theory (10M) — Groups, Permutation Groups, Lagrange Theorem',
                'Module 4: Recurrences (10M) — Solving Second-Order Recurrence Relations'
              ]
            }
          ]
        },
        {
          year: 2022,
          title: '2022 Examination Cycle',
          papers: [
            {
              id: 'dms-2022-regular',
              title: 'Discrete Mathematical Structures 2022',
              subjectId: 'discrete-mathematical-structures',
              subjectName: 'Discrete Mathematical Structures',
              subjectCode: 'MAT 2155',
              year: 2022,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/discrete-mathematical-structures/2022/dms-2022-regular.pdf',
              thumbnailUrl: '/thumbnails/dms-2022-regular.png',
              vaultKey: 'vault-dms-2022-regular',
              fileSize: '88.3 KB',
              pageCount: 2,
              dateHeld: '22-Dec-2022',
              topicsCovered: [
                'Module 1: Logic (10M) — Mathematical Induction Proofs, Propositional Logic',
                'Module 2: Posets & Lattices (10M) — Hasse Diagrams, Maximal & Minimal Elements, Lattices',
                'Module 4: Recurrence Relations (10M) — Linear Recurrence Relations, Fibonacci Sequence Modeling',
                'Module 5: Graph Theory (10M) — Planar Graphs, Handshaking Lemma, Graph Coloring',
                'Module 5: Group Theory (10M) — Groups, Cyclic Groups & Subgroup Proofs'
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // SUBJECT 3: DIGITAL SYSTEMS AND COMPUTER ORGANIZATION (9 Papers)
    // ========================================================
    {
      id: 'digital-systems-and-computer-organization',
      name: 'Digital Systems and Computer Organization',
      code: 'CSS 2104',
      shortCode: 'CSS 2104',
      aliases: ['DSCO', 'COA', 'DSD', 'CSS 2104', 'CSS2104', 'CSE 2121', 'CSE 2123', 'ICT 2123', 'CCE 2123'],
      department: 'Computer Science & Engineering',
      credits: 4,
      totalPapersCount: 9,
      availableYears: [2025, 2024, 2023, 2022],
      description: 'Combinational circuit design, Karnaugh maps, sequential flip-flops, register transfer notation, cache memory architectures, and pipelining hazard resolution.',
      years: [
        {
          year: 2025,
          title: '2025 Examination Cycle',
          papers: [
            {
              id: 'dsco-2025-regular',
              title: 'Digital Systems and Computer Organization 2025',
              subjectId: 'digital-systems-and-computer-organization',
              subjectName: 'Digital Systems and Computer Organization',
              subjectCode: 'CSS 2104',
              year: 2025,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2025/dsco-2025-regular.pdf',
              thumbnailUrl: '/thumbnails/dsco-2025-regular.png',
              vaultKey: 'vault-dsco-2025-regular',
              fileSize: '84.0 KB',
              pageCount: 3,
              dateHeld: '29-Nov-2025',
              topicsCovered: [
                'Module 1: Combinational Logic (CO1 - 10M / 20%) — 5-Variable K-Map Minimization, Carry Lookahead Adder',
                'Module 2: Sequential Logic (CO2 - 10M / 20%) — Synchronous Modulo Counter Design, Flip-Flop Conversion, Shift Registers',
                'Module 3: Multiplication & CPU (CO3 - 10M / 20%) — 4x4 Booth Multiplier Algorithm, State Diagram & Controller Logic, Addressing Modes',
                'Module 4: Memory System (CO4 - 10M / 20%) — Cache Memory Direct vs Set Associative Mapping, Virtual Memory TLB',
                'Module 5: Pipelining & I/O (CO5 - 10M / 20%) — Instruction Pipelining Data Hazards, Branch Penalties, Interrupts & DMA'
              ]
            }
          ]
        },
        {
          year: 2024,
          title: '2024 Examination Cycle',
          papers: [
            {
              id: 'dsco-2024-makeup-coa',
              title: 'Digital Systems and Computer Organization 2024 (COA)',
              subjectId: 'digital-systems-and-computer-organization',
              subjectName: 'Digital Systems and Computer Organization',
              subjectCode: 'CSE 2121',
              year: 2024,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2024/dsco-2024-makeup-coa.pdf',
              thumbnailUrl: '/thumbnails/dsco-2024-makeup-coa.png',
              vaultKey: 'vault-dsco-2024-makeup-coa',
              fileSize: '79.5 KB',
              pageCount: 3,
              dateHeld: '05-Jan-2024',
              topicsCovered: [
                'Module 3: Control Unit (10M) — Hardwired vs Microprogrammed Control Unit, Microinstruction Sequencing',
                'Module 5: I/O Organization (10M) — Interrupt Vector Handling, Direct Memory Access (DMA) Transfer Cycles',
                'Module 4: Virtual Memory (10M) — Virtual Memory Page Tables, Translation Lookaside Buffer (TLB)',
                'Module 3: CPU Architecture (10M) — Addressing Modes, Instruction Format & Execution Cycle',
                'Module 4: Cache Memory (10M) — Cache Miss Penalties, Replacement Policies (LRU, FIFO)'
              ]
            },
            {
              id: 'dsco-2024-makeup-dsd',
              title: 'Digital Systems and Computer Organization 2024 (DSD)',
              subjectId: 'digital-systems-and-computer-organization',
              subjectName: 'Digital Systems and Computer Organization',
              subjectCode: 'CSE 2123',
              year: 2024,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2024/dsco-2024-makeup-dsd.pdf',
              thumbnailUrl: '/thumbnails/dsco-2024-makeup-dsd.png',
              vaultKey: 'vault-dsco-2024-makeup-dsd',
              fileSize: '81.2 KB',
              pageCount: 3,
              dateHeld: '12-Jan-2024',
              topicsCovered: [
                'Module 1: Minimization (10M) — Quine-McCluskey (Tabular) Minimization Method with Prime Implicant Table',
                'Module 2: State Machines (10M) — Mealy vs Moore Finite State Machine Design & State Reduction',
                'Module 1: MSI Devices (10M) — Priority Encoder Logic, Decoder Tree Expansion',
                'Module 2: Counters & Registers (10M) — Johnson & Ring Counter Timing, Universal Shift Register',
                'Module 1: Programmable Logic (10M) — FPGA Architecture Basics, PAL vs PLA Implementation'
              ]
            },
            {
              id: 'dsco-2024-makeup-ict',
              title: 'Digital Systems and Computer Organization 2024 (ICT)',
              subjectId: 'digital-systems-and-computer-organization',
              subjectName: 'Digital Systems and Computer Organization',
              subjectCode: 'ICT 2123',
              year: 2024,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2024/dsco-2024-makeup-ict.pdf',
              thumbnailUrl: '/thumbnails/dsco-2024-makeup-ict.png',
              vaultKey: 'vault-dsco-2024-makeup-ict',
              fileSize: '80.1 KB',
              pageCount: 3,
              dateHeld: '10-Jan-2024',
              topicsCovered: [
                'Module 3: ALU Design (10M) — Arithmetic Logic Unit 4-bit Design, Function Select Bits',
                'Module 3: Timing & Control (10M) — Instruction Cycle Sub-phases, Bus Timing Diagrams',
                'Module 4: Cache Writing (10M) — Cache Write-Through vs Write-Back Policies, Cache Coherence',
                'Module 1: Logic Realization (10M) — Multiplexer Tree Realization of Boolean Functions',
                'Module 5: Memory Interconnect (10M) — Synchronous vs Asynchronous Memory Bus Protocols'
              ]
            }
          ]
        },
        {
          year: 2023,
          title: '2023 Examination Cycle',
          papers: [
            {
              id: 'dsco-2023-regular-coa',
              title: 'Digital Systems and Computer Organization 2023 (COA)',
              subjectId: 'digital-systems-and-computer-organization',
              subjectName: 'Digital Systems and Computer Organization',
              subjectCode: 'CSE 2121',
              year: 2023,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2023/dsco-2023-regular-coa.pdf',
              thumbnailUrl: '/thumbnails/dsco-2023-regular-coa.png',
              vaultKey: 'vault-dsco-2023-regular-coa',
              fileSize: '82.8 KB',
              pageCount: 3,
              dateHeld: '30-Nov-2023',
              topicsCovered: [
                'Module 3: Arithmetic (10M) — IEEE 754 Single & Double Precision Floating Point Representation',
                'Module 5: Pipelining (10M) — Instruction Pipelining Hazards (RAW, WAR, WAW) & Branch Prediction',
                'Module 3: Control Unit (10M) — Microprogram Sequencer & Control Memory Addressing',
                'Module 5: Parallelism (10M) — Vector Processing Concepts, Array Processors',
                'Module 5: Bus Arbitration (10M) — Centralized vs Distributed Bus Arbitration Schemes'
              ]
            },
            {
              id: 'dsco-2023-regular-dsd',
              title: 'Digital Systems and Computer Organization 2023 (DSD)',
              subjectId: 'digital-systems-and-computer-organization',
              subjectName: 'Digital Systems and Computer Organization',
              subjectCode: 'CSE 2123',
              year: 2023,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2023/dsco-2023-regular-dsd.pdf',
              thumbnailUrl: '/thumbnails/dsco-2023-regular-dsd.png',
              vaultKey: 'vault-dsco-2023-regular-dsd',
              fileSize: '83.4 KB',
              pageCount: 3,
              dateHeld: '07-Dec-2023',
              topicsCovered: [
                'Module 1: Hazards (10M) — Static & Dynamic Hazard Detection and Hazard-Free Circuit Design',
                'Module 2: State Reduction (10M) — State Table Minimization using Implication Chart Method',
                'Module 2: Flip-Flops (10M) — Master-Slave JK Flip-Flop Race-Around Condition Solution',
                'Module 1: Arithmetic Circuits (10M) — 4-bit Magnitude Comparator Design & Cascading',
                'Module 1: PLDs (10M) — Programmable Logic Arrays (PLA) & Programmable Array Logic (PAL)'
              ]
            },
            {
              id: 'dsco-2023-regular-ict',
              title: 'Digital Systems and Computer Organization 2023 (ICT)',
              subjectId: 'digital-systems-and-computer-organization',
              subjectName: 'Digital Systems and Computer Organization',
              subjectCode: 'ICT 2123',
              year: 2023,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2023/dsco-2023-regular-ict.pdf',
              thumbnailUrl: '/thumbnails/dsco-2023-regular-ict.png',
              vaultKey: 'vault-dsco-2023-regular-ict',
              fileSize: '81.6 KB',
              pageCount: 3,
              dateHeld: '05-Dec-2023',
              topicsCovered: [
                'Module 1: Decoders (10M) — 3-to-8 Decoder Cascading to 4-to-16 Decoder with Enable',
                'Module 2: Counters (10M) — Synchronous Binary Up/Down Counter Design using T Flip-Flops',
                'Module 5: Pipelining (10M) — Read-After-Write (RAW) Data Hazards & Forwarding Solutions',
                'Module 4: Memory Interleaving (10M) — High-Order vs Low-Order Memory Interleaving',
                'Module 3: Architecture (10M) — RISC vs CISC Architecture Feature Comparison'
              ]
            },
            {
              id: 'dsco-2023-makeup',
              title: 'Digital Systems and Computer Organization 2023 Makeup',
              subjectId: 'digital-systems-and-computer-organization',
              subjectName: 'Digital Systems and Computer Organization',
              subjectCode: 'CCE 2123',
              year: 2023,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2023/dsco-2023-makeup.pdf',
              thumbnailUrl: '/thumbnails/dsco-2023-makeup.png',
              vaultKey: 'vault-dsco-2023-makeup',
              fileSize: '77.3 KB',
              pageCount: 3,
              dateHeld: '23-Jan-2023',
              topicsCovered: [
                'Module 2: Shift Registers (10M) — Parallel-In Parallel-Out (PIPO) & Serial-In Serial-Out (SISO)',
                'Module 1: Logic Optimization (10M) — Combinational Circuit Design using NAND/NOR Universal Gates',
                'Module 4: Cache Mapping (10M) — Direct Mapping, Fully Associative & 2-Way Set Associative',
                'Module 5: I/O Interfaces (10M) — Programmed I/O, Interrupt-Driven I/O & DMA',
                'Module 3: Instruction Formats (10M) — 3-Address, 2-Address, 1-Address & 0-Address Instruction Formats'
              ]
            }
          ]
        },
        {
          year: 2022,
          title: '2022 Examination Cycle',
          papers: [
            {
              id: 'dsco-2022-regular',
              title: 'Digital Systems and Computer Organization 2022',
              subjectId: 'digital-systems-and-computer-organization',
              subjectName: 'Digital Systems and Computer Organization',
              subjectCode: 'CCE 2123',
              year: 2022,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2022/dsco-2022-regular.pdf',
              thumbnailUrl: '/thumbnails/dsco-2022-regular.png',
              vaultKey: 'vault-dsco-2022-regular',
              fileSize: '78.5 KB',
              pageCount: 3,
              dateHeld: '13-Dec-2022',
              topicsCovered: [
                'Module 1: Boolean Algebra (10M) — Boolean Function Simplification using K-Map & Don’t Care Conditions',
                'Module 1: Arithmetic Logic (10M) — Full Adder and Full Subtractor Design from Half Adders',
                'Module 2: Flip-Flops (10M) — Flip-Flop Conversion (D to T, SR to JK) with Excitation Tables',
                'Module 4: Memory System (10M) — Main Memory Organization, RAM/ROM Chip Interfacing',
                'Module 3: Addressing Modes (10M) — Immediate, Direct, Indirect, Register & Indexed Addressing Modes'
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // SUBJECT 4: DATA COMMUNICATION AND COMPUTER NETWORK (6 Papers)
    // ========================================================
    {
      id: 'data-communication-and-computer-network',
      name: 'Data Communication and Computer Network',
      code: 'CSS 2102',
      shortCode: 'CSS 2102',
      aliases: ['DCCN', 'NETWORKS', 'CN', 'NETWORK', 'CSS 2102', 'CSS2102', 'ICT 2124', 'ICT 2156'],
      department: 'Computer Science & Engineering',
      credits: 4,
      totalPapersCount: 6,
      availableYears: [2025, 2024, 2023, 2022],
      description: 'OSI and TCP/IP reference architectures, physical transmission media, framing, CRC error detection, Sliding Window protocols, CSMA/CD, IPv4 CIDR subnetting, and routing algorithms.',
      years: [
        {
          year: 2025,
          title: '2025 Examination Cycle',
          papers: [
            {
              id: 'dccn-2025-regular',
              title: 'Data Communication and Computer Network 2025',
              subjectId: 'data-communication-and-computer-network',
              subjectName: 'Data Communication and Computer Network',
              subjectCode: 'CSS 2102',
              year: 2025,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-communication-and-computer-network/2025/dccn-2025-regular.pdf',
              thumbnailUrl: '/thumbnails/dccn-2025-regular.png',
              vaultKey: 'vault-dccn-2025-regular',
              fileSize: '83.1 KB',
              pageCount: 3,
              dateHeld: '22-Nov-2025',
              topicsCovered: [
                'Module 3: Network Layer (CO3 - 18M / 36%) — CIDR Subnetting & Mask Allocation, Distance Vector & Link State Routing Algorithms',
                'Module 4: Transport Layer (CO4 - 10M / 20%) — TCP 3-Way Handshake, TCP Sliding Window Flow Control, AIMD Congestion Control',
                'Module 5: Application Layer (CO5 - 8M / 16%) — DNS Iterative vs Recursive Resolution, HTTP/1.1 vs HTTP/2 Persistent Connections',
                'Module 1: Physical Layer (CO1 - 7M / 14%) — Shannon & Nyquist Channel Capacity Limits, Line Coding (NRZ, Manchester)',
                'Module 2: Data Link Layer (CO2 - 7M / 14%) — CRC Polynomial Error Detection, Sliding Window ARQ (Go-Back-N, Selective Repeat)'
              ]
            },
            {
              id: 'dccn-2025-makeup',
              title: 'Data Communication and Computer Network 2025',
              subjectId: 'data-communication-and-computer-network',
              subjectName: 'Data Communication and Computer Network',
              subjectCode: 'CSS 2102',
              year: 2025,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-communication-and-computer-network/2025/dccn-2025-makeup.pdf',
              thumbnailUrl: '/thumbnails/dccn-2025-makeup.png',
              vaultKey: 'vault-dccn-2025-makeup',
              fileSize: '81.7 KB',
              pageCount: 3,
              dateHeld: '05-Jan-2026',
              topicsCovered: [
                'Module 3: Network Layer (18M / 36%) — Distance Vector Count-to-Infinity Problem, Split Horizon, Subnetting Calculation',
                'Module 2: Data Link Layer (10M / 20%) — Hamming Code Error Correction (Single-Bit Correction), CSMA/CD Minimum Frame Length',
                'Module 4: Transport Layer (10M / 20%) — TCP Connection Termination 4-Way Handshake, Leaky Bucket vs Token Bucket Shaping',
                'Module 1: Physical Layer (6M / 12%) — Signal Attenuation, Bit-Stuffing & Byte-Stuffing Framing, Pure vs Slotted ALOHA',
                'Module 5: Application Layer (6M / 12%) — DNS Hierarchical Architecture, Email Protocols (SMTP, POP3, IMAP), Socket API'
              ]
            }
          ]
        },
        {
          year: 2024,
          title: '2024 Examination Cycle',
          papers: [
            {
              id: 'dccn-2024-makeup',
              title: 'Data Communication and Computer Network 2024',
              subjectId: 'data-communication-and-computer-network',
              subjectName: 'Data Communication and Computer Network',
              subjectCode: 'ICT 2124',
              year: 2024,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-communication-and-computer-network/2024/dccn-2024-makeup.pdf',
              thumbnailUrl: '/thumbnails/dccn-2024-makeup.png',
              vaultKey: 'vault-dccn-2024-makeup',
              fileSize: '80.5 KB',
              pageCount: 3,
              dateHeld: '15-Jan-2024',
              topicsCovered: [
                'Module 1: Transmission (10M) — Line Coding Schemes (NRZ-L, NRZ-I, Manchester, Differential Manchester)',
                'Module 2: MAC & Flow Control (10M) — Sliding Window Throughput Efficiency, CSMA/CA Backoff Algorithm',
                'Module 3: Address Resolution (10M) — ARP Request/Reply Operation, IPv4 Header Fields & Subnetting',
                'Module 3: Routing Protocols (10M) — BGP Exterior Gateway Protocol vs OSPF Interior Routing',
                'Module 5: Web Protocols (10M) — HTTP/1.1 Pipelining vs HTTP/2 Multiplexing, Non-Persistent vs Persistent Connections'
              ]
            }
          ]
        },
        {
          year: 2023,
          title: '2023 Examination Cycle',
          papers: [
            {
              id: 'dccn-2023-regular',
              title: 'Data Communication and Computer Network 2023',
              subjectId: 'data-communication-and-computer-network',
              subjectName: 'Data Communication and Computer Network',
              subjectCode: 'ICT 2124',
              year: 2023,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-communication-and-computer-network/2023/dccn-2023-regular.pdf',
              thumbnailUrl: '/thumbnails/dccn-2023-regular.png',
              vaultKey: 'vault-dccn-2023-regular',
              fileSize: '82.2 KB',
              pageCount: 3,
              dateHeld: '09-Dec-2023',
              topicsCovered: [
                'Module 1: Information Theory (8M) — Shannon Channel Capacity & Nyquist Bit Rate Formulas',
                'Module 2: Flow Control (10M) — Stop-and-Wait ARQ Protocol Efficiency & Utilization',
                'Module 3: IP Protocol (14M) — IPv4 Packet Fragmentation & Reassembly (Offset & Flags), Subnet Masks',
                'Module 4: Transport Protocols (10M) — TCP Segment Structure vs UDP Header, Port Numbers & Sockets',
                'Module 4: Traffic Shaping (8M) — Leaky Bucket & Token Bucket Congestion Control Algorithms'
              ]
            },
            {
              id: 'dccn-2023-makeup',
              title: 'Data Communication and Computer Network 2023 Makeup',
              subjectId: 'data-communication-and-computer-network',
              subjectName: 'Data Communication and Computer Network',
              subjectCode: 'ICT 2156',
              year: 2023,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/data-communication-and-computer-network/2023/dccn-2023-makeup.pdf',
              thumbnailUrl: '/thumbnails/dccn-2023-makeup.png',
              vaultKey: 'vault-dccn-2023-makeup',
              fileSize: '78.9 KB',
              pageCount: 3,
              dateHeld: '30-Jan-2023',
              topicsCovered: [
                'Module 1: Media (8M) — Guided Transmission Media (Twisted Pair, Coaxial, Optical Fiber) Attenuation',
                'Module 2: Framing (10M) — Character Stuffing & Bit Stuffing Framing Protocols',
                'Module 2: Random Access (10M) — Pure ALOHA vs Slotted ALOHA Maximum Throughput Analysis',
                'Module 3: Subnetting (12M) — Classless Inter-Domain Routing (CIDR) Subnet Calculations',
                'Module 5: Mail & Web (10M) — Electronic Mail Transfer (SMTP, POP3, IMAP4) & MIME Encoding'
              ]
            }
          ]
        },
        {
          year: 2022,
          title: '2022 Examination Cycle',
          papers: [
            {
              id: 'dccn-2022-regular',
              title: 'Data Communication and Computer Network 2022',
              subjectId: 'data-communication-and-computer-network',
              subjectName: 'Data Communication and Computer Network',
              subjectCode: 'ICT 2156',
              year: 2022,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-communication-and-computer-network/2022/dccn-2022-regular.pdf',
              thumbnailUrl: '/thumbnails/dccn-2022-regular.png',
              vaultKey: 'vault-dccn-2022-regular',
              fileSize: '79.8 KB',
              pageCount: 3,
              dateHeld: '19-Dec-2022',
              topicsCovered: [
                'Module 1: Architecture (10M) — OSI 7-Layer Reference Model vs TCP/IP Protocol Suite Functions',
                'Module 1: Multiplexing (10M) — Frequency Division (FDM) vs Time Division Multiplexing (TDM/STDM)',
                'Module 2: Error Detection (10M) — Internet Checksum Algorithm & Cyclic Redundancy Check (CRC)',
                'Module 3: Routing (10M) — Bellman-Ford Distance Vector Routing Algorithm Steps',
                'Module 5: Sockets (10M) — Socket API Primitive Functions (socket, bind, listen, accept, connect)'
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // SUBJECT 5: DATA ANALYTICS (3 Papers)
    // ========================================================
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      code: 'CSS 2103',
      shortCode: 'CSS 2103',
      aliases: ['DA', 'ANALYTICS', 'DATA ANALYTICS', 'CSS 2103', 'CSS2103', 'DSE 2121'],
      department: 'Computer Science & Engineering',
      credits: 4,
      totalPapersCount: 3,
      availableYears: [2025, 2023],
      description: 'Data preprocessing, exploratory data analysis, covariance matrices, hypothesis testing, linear and logistic regression, decision trees, and k-means clustering.',
      years: [
        {
          year: 2025,
          title: '2025 Examination Cycle',
          papers: [
            {
              id: 'da-2025-regular',
              title: 'Data Analytics 2025',
              subjectId: 'data-analytics',
              subjectName: 'Data Analytics',
              subjectCode: 'CSS 2103',
              year: 2025,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-analytics/2025/da-2025-regular.pdf',
              thumbnailUrl: '/thumbnails/da-2025-regular.png',
              vaultKey: 'vault-da-2025-regular',
              fileSize: '85.2 KB',
              pageCount: 3,
              dateHeld: '25-Nov-2025',
              topicsCovered: [
                'Module 4: Pattern & Classification (CO4 - 21M / 42%) — Association Rule Pattern Evaluation (Lift, Kulc, Cosine Measures), Decision Tree Splits',
                'Module 5: Clustering & PCA (CO5 - 14M / 28%) — K-Means Clustering Centroids & Inertia, Principal Component Analysis (PCA) Eigenvectors',
                'Module 3: Data Binning & Exploration (CO3 - 10M / 20%) — Equal-Width vs Equal-Frequency Binning Histogram Analysis, Multiple Linear Regression',
                'Module 1: Preprocessing (CO1 - 5M / 10%) — Z-Score Standardization vs Min-Max Normalization, Missing Value Imputation Strategies'
              ]
            },
            {
              id: 'da-2025-makeup',
              title: 'Data Analytics 2025 Makeup',
              subjectId: 'data-analytics',
              subjectName: 'Data Analytics',
              subjectCode: 'CSS 2103',
              year: 2025,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/data-analytics/2025/da-2025-makeup.pdf',
              thumbnailUrl: '/thumbnails/da-2025-makeup.png',
              vaultKey: 'vault-da-2025-makeup',
              fileSize: '83.9 KB',
              pageCount: 3,
              dateHeld: '27-Dec-2025',
              event: 'MAKE-UP EXAM-ODD SEMESTER 2025 MIT MANIPAL',
              topicsCovered: [
                'Module 4: Classification & Evaluation (15M / 30%) — ROC Curves, Area Under Curve (AUC), Confusion Matrix (Precision, Recall, F1-Score)',
                'Module 3: Logistic Regression (12M / 24%) — Logistic Regression Sigmoid Function, Log-Odds & Decision Boundaries',
                'Module 5: Hierarchical Clustering (10M / 20%) — Agglomerative Hierarchical Clustering Dendrogram, Distance Metrics',
                'Module 2: Statistical Inference (8M / 16%) — Chi-Square Independence Test, Hypothesis Testing & P-Value Interpretation',
                'Module 1: Outlier Detection (5M / 10%) — Interquartile Range (IQR) Outlier Identification, Box Plot Analysis'
              ]
            }
          ]
        },
        {
          year: 2023,
          title: '2023 Examination Cycle',
          papers: [
            {
              id: 'da-2023-regular',
              title: 'Data Analytics 2023',
              subjectId: 'data-analytics',
              subjectName: 'Data Analytics',
              subjectCode: 'DSE 2121',
              year: 2023,
              variant: 'Regular',
              fileUrl: '/pyqs/semester-3/endsem/data-analytics/2023/da-2023-regular.pdf',
              thumbnailUrl: '/thumbnails/da-2023-regular.png',
              vaultKey: 'vault-da-2023-regular',
              fileSize: '82.0 KB',
              pageCount: 3,
              dateHeld: '09-Dec-2023',
              topicsCovered: [
                'Module 1: Preprocessing & Scaling (10M / 20%) — Feature Normalization, Handling Missing Values with Mean/Median Imputation',
                'Module 2: Correlation Analysis (10M / 20%) — Pearson Correlation Coefficient Formula & Significance',
                'Module 3: Linear Regression (10M / 20%) — Ordinary Least Squares (OLS) Regression Line, Coefficient Interpretation & R-Squared',
                'Module 4: Supervised Learning (10M / 20%) — K-Nearest Neighbors (KNN) Distance Metrics, Decision Tree Gini Impurity',
                'Module 5: Unsupervised Learning (10M / 20%) — K-Means Clustering Algorithm Steps & Elbow Method for Optimal K'
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const ARCHIVE_METADATA = {
  institute: CENTRALIZED_ARCHIVE.institute,
  instituteFullName: CENTRALIZED_ARCHIVE.instituteFullName,
  department: 'Computer Science & Engineering (CSE)',
  semester: CENTRALIZED_ARCHIVE.semester,
  semesterLabel: CENTRALIZED_ARCHIVE.semesterLabel,
  examType: CENTRALIZED_ARCHIVE.examType,
  examTypeLabel: CENTRALIZED_ARCHIVE.examTypeLabel,
  githubUrl: CENTRALIZED_ARCHIVE.githubUrl,
  repositoryName: 'MIT Manipal CSE 3rd Sem Endsem PYQs',
  tagline: CENTRALIZED_ARCHIVE.tagline,
  description: CENTRALIZED_ARCHIVE.description,
};

export function getArchiveSubjects(): ArchiveSubject[] {
  return CENTRALIZED_ARCHIVE.subjects;
}

export function getSubjectById(subjectId: string): ArchiveSubject | undefined {
  return CENTRALIZED_ARCHIVE.subjects.find(s => s.id === subjectId);
}

export function getAllArchivePapers(): ArchivePaper[] {
  return CENTRALIZED_ARCHIVE.subjects.flatMap(s => s.years.flatMap(y => y.papers));
}

export function getPapersBySubjectAndYear(subjectId: string, year?: number | 'all'): ArchivePaper[] {
  const subject = getSubjectById(subjectId);
  if (!subject) return [];
  if (!year || year === 'all') {
    return subject.years.flatMap(y => y.papers);
  }
  const yearGroup = subject.years.find(y => y.year === year);
  return yearGroup ? yearGroup.papers : [];
}

export function getArchiveStats() {
  const allPapers = getAllArchivePapers();
  const subjects = getArchiveSubjects();
  return {
    totalPapers: allPapers.length,
    subjectsCount: subjects.length,
    yearsCount: 4,
    yearsCovered: '2022–2025',
    semester: 3,
    institute: 'MIT Manipal',
  };
}