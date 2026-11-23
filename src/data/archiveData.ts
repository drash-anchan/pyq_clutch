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
                'Module 3: Computer Arithmetic & Control Design (CO3 - 19M / 38% — Highest Weightage!) — Booth Algorithm (13 x -6), IEEE 754 32-bit Floating-Point Addition (86.625 + 10.125), Wilkes Microprogrammed Control Decoder, 4x4 Booth Multiplier RTL & Logic Controller (Sequence Register, Decoder, Counter), Data Path Control Points',
                'Module 2: Sequential Circuits & Counters (CO2 - 10M / 20%) — State Diagram Synchronous Circuit Design using JK Flip-Flops, 4-Bit Asynchronous Ripple Counter, Behavioral Verilog 8-Bit Ring Counter',
                'Module 4: Memory System & Pipelining (CO4 - 8M / 16%) — Cache Memory Address Tag Fields (Direct, Associative, 16-Way Set Associative), 5-Stage Instruction Pipelining Block Diagram',
                'Module 5: Instruction Set Architecture (CO5 - 7M / 14%) — RISC vs CISC Architecture & CISC Dot Product Program, Byte vs Word Memory Addressing',
                'Module 1: Combinational Logic (CO1 - 6M / 12%) — NOR-Only Logic Minimization, 3-Bit Magnitude Comparator Design, Programmable Logic Array (PLA) Realization'
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
                'Module 3: Computer Arithmetic & Control Unit (18M / 36%) — Non-Restoring Division (14/3), IEEE 754 Floating-Point Multiplication & Representation, 2\'s Complement Addition/Subtraction Overflow, Controller State Diagram with Counter/Decoder/PLA, One-Bus vs Three-Bus Clock Cycle Analysis',
                'Module 4: Memory System & Cache Architecture (15M / 30%) — 2Gx32 Memory Module Design from 256x8 SRAM Chips, 4-Way Set Associative Cache Address Fields (Tag, Set, Word), Write-Buffer Optimization for Write-Through and Write-Back',
                'Module 4: Secondary Storage, I/O & Multiprocessing (12M / 24%) — Shared-Memory Cache Coherence & Write-Back Protocol, Hard Disk Controller Latency & Transfer Rate (360 RPM), Vectored Interrupts, Memory-Mapped vs Isolated I/O, Processor-GPU Coordination',
                'Module 5: Instruction Set Architecture (5M / 10%) — RISC-Style Assembly Program for Minimum Element in Array/List, Register Addressing & Memory Pointers'
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
                'Module 2: Synchronous Sequential Circuits & State Machines (15M / 30%) — State Diagram Synthesis using T Flip-Flops, State Table Reduction & State Diagram Derivation, FSM Sequence Detector (Second Occurrence of w=1)',
                'Module 2: Counters & Shift Registers (10M / 20%) — Synchronous Repeated Counter (0 to 6) with Self-Correction using JK Flip-Flops, 8-Signal Johnson Counter with AND Decoding, 5-Bit Ring Counter using D Flip-Flops',
                'Module 3: Processor Control Unit & Datapath (10M / 20%) — Multi-Register Processor Control Unit (Timing & Control Signal Expressions, Tri-State Bus), ASM Chart for Bit-Counting Circuit',
                'Module 1: Combinational Logic & Arithmetic Circuits (9M / 18%) — Hierarchical 40-Bit Carry Lookahead Adder (8-Bit Blocks & Delay), SOP vs POS Realization & Cost Comparison, 3-to-8 Decoder with OR Gate Implementation',
                'Module 1: Latches, Flip-Flops & CMOS Logic (6M / 12%) — Positive Edge-Triggered D Flip-Flop using NAND Gates, Master-Slave JK Pulse Width Solution, Basic RS Latch using NOR Gates, CMOS NOR Transistor Circuit'
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
                'Module 1: Combinational Logic & Arithmetic Circuits (18M / 36%) — Conditional Adder/Subtractor (F=Y±1) using 7483 IC & Half Adders, 8 4 -2 -1 to 8 4 2 1 Code Converter, Full Adder/Subtractor via 74153 MUX & XOR Gates, Full Adder using 2-to-4 Decoders, 1-Bit Magnitude Comparator',
                'Module 2: Sequential Circuits & Counter Design (17M / 34%) — Synchronous Sequence Counter (0,1,2,4,6) using D Flip-Flops, Mealy Model Sequence Detector (011), Synchronous Arbitrary Counter (0,3,5,6) using JK Flip-Flops, Asynchronous Modulo Counters (2 to 6 UP Counter, 2-bit Up-Down Counter), JK from D Flip-Flop with 2:1 MUX',
                'Module 3: Computer Arithmetic & Control Unit (8M / 16%) — Restoring Division Algorithm (8/3) with Register Trace, Microprogrammed Control Unit Design for 4x4 Booth Multiplier',
                'Module 4: Memory System & I/O Organization (5M / 10%) — Set-Associative Cache Mapping Principles & Address Translation, Direct Memory Access (DMA) Block Transfer Technique'
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
                'Module 3: Computer Arithmetic & Control Unit (18M / 36%) — Binary Listing of Microprogrammed Control Unit, Booth\'s Multiplication Algorithm (33 x -23 in 7-bit 2\'s complement), Restoring Division Algorithm (7 / 4), Signed Integer Arithmetic & 5-bit Overflow Detection, Two-Bus vs Three-Bus Processor Architecture Clock Cycles',
                'Module 4: Storage, I/O & Multiprocessing (13M / 26%) — DMA Controller Architecture & Data Transfer Protocol, Disk Controller Track Capacity & Transfer Rate at 6400 RPM, Shared Memory Multiprocessors (UMA vs NUMA), Coarse vs Fine-Grained Multithreading',
                'Module 4: Memory System & Cache Architecture (12M / 24%) — Block Set-Associative Cache Organization & Address Fields (Tag, Set, Word), 1K x 8 Memory Module Bit-Cell Design & Address Lines, Average Cache Access Time with Read/Write Miss Penalties',
                'Module 5: Instruction Set Architecture & Pipelining (7M / 14%) — RISC-Style Linear Search Program using Indexed Addressing Mode, 5-Stage Instruction Pipelining Block Diagram & Concepts'
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
                'Module 2: Synchronous Sequential Circuits & State Machines (16M / 32%) — State Diagram Synthesis using JK Flip-Flops, State Table Reduction & Equivalence, Moore vs Mealy FSM Models, SR Latch using NAND Gates, JK from D Flip-Flop Conversion',
                'Module 1: Combinational Logic & Arithmetic Circuits (12M / 24%) — 4-Bit Combinational Adder/Subtractor Circuit, Functional Decomposition for Minimization, Boolean Function Realization via Decoder and 2:1 MUX, CMOS NAND Transistor Implementation',
                'Module 2: Counters & Shift Registers (10M / 20%) — Synchronous Self-Correcting Counter (0,1,2,4,6) using D Flip-Flops, 3-Bit Johnson Counter using T Flip-Flops, 4-Bit Ring Counter using D Flip-Flops',
                'Module 3: Processor Datapath & Control Logic (10M / 20%) — 4-Bit 4-Register Common Bus System using Multiplexers, Two-Register Swapping Controller & Tri-State Bus Architecture'
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
                'Module 1: Combinational Circuits & Converters (18M / 36%) — 4-Bit Parallel Adder with Carry Lookahead Adder (CLA), 8 4 2 1 BCD to Gray Code Converter using NAND Gates, 16-to-1 Multiplexer from 2-to-1 MUX Tree, Full Adder using 3-to-8 Decoder, 4-bit by 3-bit Array Multiplier',
                'Module 2: Sequential Circuits & Counter Design (17M / 34%) — 3-Bit Gray Code Synchronous DOWN Counter using JK Flip-Flops, Mealy Model Sequence Detector (Three Consecutive 1s), Synchronous Sequence Counter (0-3-2-1) using T Flip-Flops, Asynchronous Modulo DOWN Counter (6 to 2), Frequency Division & JK to D Conversion',
                'Module 3: Computer Arithmetic & Processor Datapath (13M / 26%) — Booth\'s Multiplication Algorithm (-7 x 3) with Step-by-Step Flowchart, Single-Bus vs Two-Bus vs Three-Bus RALU Architecture, Arithmetic Logic Unit (ALU) Operations & Flag Generation',
                'Module 4: I/O Organization & Interrupts (2M / 4%) — Daisy Chain Priority Interrupt Polling Protocol & Vector Generation'
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
                'Module 2: Sequential Circuits & Counter Design (20M / 40%) — Sequence Detector FSM (\'1011\' Overlapping) using JK Flip-Flops, Self-Correcting BCD 8421 Synchronous Counter using T Flip-Flops, 8-State Johnson Counter Sequence Generator (00011001), 4-Bit Asynchronous Up/Down Counter with 2:1 MUX, Hexadecimal Counter (23H to 56H), D Flip-Flop NAND Latch',
                'Module 3: Computer Arithmetic & Control Unit (15M / 30%) — Booth\'s Multiplication Algorithm Flowchart & Trace (15 x 7), Microprogrammed Control Unit Architecture, Booth vs Add-and-Shift Performance Comparison, 3-Bit Binary Multiplier via 7483 ICs, Carry Save Addition vs Carry Propagation Speed Analysis',
                'Module 4: Cache Memory & I/O Systems (8M / 16%) — Three Cache Mapping Architectures (Direct, Associative, Set-Associative), Direct Memory Access (DMA) Transfer Modes (Burst, Cycle Stealing, Transparent)',
                'Module 1: Combinational Logic & Decoders (7M / 14%) — Gray Code to Excess-3 Code Converter using 3-to-8 Decoders, 2-Bit Magnitude Comparator (A >= B) using Logic Gates'
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
                'Module 2: Sequential Circuits & Counter Design (18M / 36%) — Reversible Synchronous Counter (1-3-2-5-4-1) with Mode Control Y using T Flip-Flops, Sequence Detector FSM (\'1001\' Overlapping) using JK Flip-Flops, 5-State Ring Counter Sequence Generator (01011), Asynchronous Modulo Counters (2 to 6 Counter, 00 to 86 Decade Counter IC), T Flip-Flop NOR Latch',
                'Module 1: Combinational Logic & Arithmetic Circuits (16M / 32%) — Carry Propagation vs Carry Lookahead vs Carry Save Adder (Adding 4 Binary Numbers), 8 4 2 1 BCD to Gray Code Converter, 4:2 Priority Encoder Circuit, 4-Bit Equality Comparator, 4-Bit Barrel Combinational Shifter',
                'Module 3: Computer Arithmetic & Control Unit (8M / 16%) — Hardwired vs Microprogrammed Control Unit Comparison (Merits & Demerits), Non-Restoring Division Algorithm (10101 / 110)',
                'Module 4: Cache Memory & Interrupt Handling (8M / 16%) — Cache Tag Field Calculations (Direct, Associative, 4-Way Set Associative), Multiple Interrupt Handling Techniques (Vectored, Daisy Chain, Polling)'
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
                'Module 3: Network Layer (CO3 - 18M / 36%) — CIDR Subnetting (/26 into 4 subnets), Route Aggregation, Router Forwarding Longest-Prefix Match, ARP Request/Reply Packets, Dijkstra Link-State Routing',
                'Module 4: Transport Layer (CO4 - 10M / 20%) — IPv4 Datagram Multi-MTU Fragmentation (Offset & MF Flag), TCP Out-of-Order / Delayed Segment ACK Rules, UDP Frame Size Encapsulation',
                'Module 5: Application Layer (CO5 - 8M / 16%) — TCP Three-Way Handshake Connection Establishment & Flags, DNS Recursive vs Iterative Resolution Diagrams',
                'Module 1: Physical Layer (CO1 - 7M / 14%) — ASK vs FSK vs PSK Modulation Comparison & Telephone Channel Selection, Line Coding (Differential Manchester & Bipolar AMI)',
                'Module 2: Data Link Layer (CO2 - 7M / 14%) — Sliding Window Go-Back-N vs Selective Repeat Transmission Counts (Periodic Frame Loss), Stop-and-Wait ARQ Propagation Delay Calculation'
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
                'Module 3: Network Layer (CO3 - 18M / 36%) — Subnetting Design for Custom Host Requirements, Router Longest Mask Match Forwarding, Direct vs Indirect Delivery, ARP Cache Table State Transitions, Dijkstra Shortest Path Table & Tree',
                'Module 4: Transport & Protocols (CO4 - 16M / 32%) — IPv4 Datagram Fragmentation across Dual MTU Networks (2000B to 600B), TCP Congestion Control AIMD (cwnd Growth & Throughput), GBN vs SR vs TCP Loss Comparison, DNS Iterative Query-Response Count',
                'Module 1: Physical Layer (CO1 - 7M / 14%) — Composite Periodic Square Wave Data Rate & Bandwidth Analysis, Line Coding (Manchester & Bipolar AMI)',
                'Module 2: Data Link Layer (CO2 - 7M / 14%) — CRC Error Detection Encoding (Generator Polynomial P=11011), Hub vs Switch vs Router Transmission Analysis, CSMA/CD Minimum Frame Size for Collision Detection',
                'Module 5: Application Layer (CO5 - 2M / 4%) — UDP Hexadecimal Header Dump Decoding (Source/Destination Ports, Length, Direction)'
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
                'Module 1: Signals & Physical Layer (10M / 20%) — Periodic Continuous vs Discrete Signals, Analog vs Digital Time Domain, SNR Optimization Trade-Offs, Parabolic Antenna Path Loss & Gains',
                'Module 1: Line Coding & Encoding (10M / 20%) — Differential Manchester Encoding (DME), HDB3 Scrambling, Manchester Bandwidth vs NRZ, Vertical Redundancy Check (VRC) Parity',
                'Module 2: Error Correction & Framing (10M / 20%) — Hamming Code (Length 15) Parity Bit Calculation & Syndrome, Sliding Window Go-Back-N Window Positions, Statistical vs Synchronous TDM',
                'Module 2: Flow Control & Bridging (10M / 20%) — Satellite Link Utilization (270ms Delay) for Stop-and-Wait vs Continuous Windows, TCP over IP over PPP over 56 kbps Link, Spanning Tree Bridge Configuration (Y, d, X) & Blocked Ports',
                'Module 2: Medium Access Control (10M / 20%) — CSMA/CD Minimum Frame Size Calculation at 10 Gbps, FDMA vs TDMA vs CDMA, Long Latency Sliding Window Sequence Number Calculation'
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
                'Module 1: Signals & Channel Capacity (10M / 20%) — Shannon Channel Capacity & Nyquist Bit Rate Limits, Multilevel PSK Signaling (M=8), 16-QAM Bandwidth, ASK Constellation Diagram, Twisted Pair vs Coaxial Cable',
                'Module 2: Error Detection & Multiplexing (10M / 20%) — Hamming Code (7, 4) Encoding & Single-Bit Error Correction Steps, Vertical Redundancy Check (VRC), Statistical TDM vs Synchronous TDM',
                'Module 2: Flow Control (10M / 20%) — Stop-and-Wait ARQ Total Transmission Time Calculations (3000 km & 5000 km, 1M bits, 2x10^8 m/s)',
                'Module 2: Framing & Bridging (10M / 20%) — PPP vs HDLC Protocol Architecture, Learning Bridge Forwarding Table Trace (B1-B4 Port Mapping)',
                'Module 2: Medium Access Control (10M / 20%) — Pure ALOHA Channel Capacity & Max Stations (56 kbps), CSMA/CD Minimum Frame Size (1 Gbps), Sliding Window Optimal Window Size for 80ms RTT & 128 kbps Bottleneck, MAC vs LLC Sublayer'
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
                'Module 2: Flow Control & ARQ (10M / 20%) — Sliding Window Go-Back-N Protocol (Window Size 4) Multi-Event Window Transitions, Acknowledgement Loss Handling',
                'Module 1: Wireless Transmission & Noise (10M / 20%) — Transmit Power in dBm and dBW (50W), Free Space Path Loss at 100m and 10km (900 MHz), Thermal Noise Calculation at 294K (15 MHz Bandwidth)',
                'Module 1: Signal Analysis (10M / 20%) — Fourier Series Analysis of Square Waves, Analog vs Digital Transmission Trade-Offs',
                'Module 2: Error Detection (10M / 20%) — Cyclic Redundancy Check (CRC) Polynomial Division & Codewords, Internet Checksum Algorithm',
                'Module 1: Transmission Media & Multiplexing (10M / 20%) — Guided Media Transmission Characteristics, Synchronous vs Statistical Time Division Multiplexing'
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
                'Module 2: Data Link Protocols (10M / 20%) — Selective Repeat ARQ Sliding Window Diagram (3-Bit Sequence Numbers, Frame Loss, Timeout, Buffer Full Handling)',
                'Module 1: Signal Power & Free Space Loss (10M / 20%) — Transmit Power Conversion to dBm and dBW (100W), Free Space Path Loss at 50m and 10km (800 MHz Carrier Frequency)',
                'Module 1: Channel Capacity (10M / 20%) — Nyquist Maximum Data Rate and Shannon Capacity Formula for Noisy Channels',
                'Module 2: Error Detection & Correction (10M / 20%) — CRC Generator Polynomials & Error Checking, Parity Check Mechanisms',
                'Module 1: Multiplexing Techniques (10M / 20%) — Frequency Division Multiplexing (FDM) vs Time Division Multiplexing (TDM) System Architecture'
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