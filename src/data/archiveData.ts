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
              topicsCovered: ['Circular Queue Array', 'Doubly Linked List Queue', 'AVL Tree Rotations', 'Two Stacks Single Array', 'Sparse Matrix Transpose', 'Stack Expression Evaluation'],
              sampleQuestions: [
                'Construct an AVL tree for insertions: [21, 26, 30, 9, 4, 14, 28, 18, 15] showing rotations and balance factors.',
                'Develop a C program using Doubly Linked List to manage a patient queue in a hospital.',
                'Two queues Q1 and Q2 are implemented in a single array of size N where Q1 grows left-to-right and Q2 grows right-to-left.'
              ]
            },
            {
              id: 'ds-2025-makeup',
              title: 'Data Structures 2025 Makeup',
              subjectId: 'data-structures',
              subjectName: 'Data Structures',
              subjectCode: 'CSS 2101',
              year: 2025,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/data-structures/2025/ds-2025-makeup.pdf',
              thumbnailUrl: '/thumbnails/ds-2025-makeup.png',
              vaultKey: 'vault-ds-2025-makeup',
              fileSize: '79.1 KB',
              pageCount: 3,
              dateHeld: '03-Jan-2026',
              event: '058-MIT BLR-MAKEUP EXAM-2025-2026',
              topicsCovered: ['Sparse Matrix Representation', 'Infix to Postfix Evaluation', 'Double Ended Queue', 'Threaded Binary Trees', 'Dijkstra Shortest Path'],
              sampleQuestions: [
                'Write C algorithm to convert infix algebraic expression into postfix representation using explicit stack.',
                'Explain deletion in a Threaded Binary Tree with diagrams.',
                'Implement Circular Deque with insertFront, deleteRear, and overflow handling.'
              ]
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
              topicsCovered: ['Circular Queue Array', 'Binary Search Tree Traversal', 'Stack Recursion Simulation', 'Breadth First Search', 'Hashing with Open Addressing'],
              sampleQuestions: [
                'Trace stack state during quicksort partition algorithm execution.',
                'Write complete function to search and delete a node with two children in a BST.'
              ]
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
              topicsCovered: ['Priority Queue', 'Max Heapify', 'Polynomial Addition Linked List', 'Depth First Search', 'B-Tree Node Properties'],
              sampleQuestions: [
                'Demonstrate build-max-heap on sequence [4, 1, 3, 2, 16, 9, 10, 14, 8, 7].',
                'Write C routine to add two single-variable polynomials represented as singly linked lists.'
              ]
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
              topicsCovered: ['Multiple Stacks', 'Singly Linked List Reversal', 'AVL Tree Double Rotations', 'Min Heap Creation', 'Kruskal Minimum Spanning Tree'],
              sampleQuestions: [
                'Write an algorithm to reverse a singly linked list in O(n) time and O(1) auxiliary space.',
                'Construct AVL tree by inserting keys in given order and compute balance factor of each node.'
              ]
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
              topicsCovered: ['Queue using Stacks', 'Expression Tree Construction', 'Trie Prefix Trees', 'Topological Sort DAG', 'Dynamic Memory Management'],
              sampleQuestions: [
                'Implement a FIFO queue using two LIFO stacks with amortized O(1) dequeue cost.',
                'Construct expression tree for postfix expression (a b + c * d e / -) and output prefix form.'
              ]
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
              topicsCovered: ['Circular Queue Implementation', 'Binary Tree Reconstruction', 'Adjacency List vs Matrix', 'Radix Sort', 'Collision Resolution'],
              sampleQuestions: [
                'Given inorder and postorder traversal sequences, uniquely reconstruct the binary tree.',
                'Explain quadratic probing with an example and compare against linear probing.'
              ]
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
              topicsCovered: ['Stack Applications', 'Circular Linked List', 'Binary Search Tree Operations', 'Graph Traversal', 'Heap Sort Analysis'],
              sampleQuestions: [
                'Write C algorithm to check if an arithmetic expression has balanced parentheses.',
                'Perform heap sort on array [15, 19, 10, 7, 17, 16] step-by-step.'
              ]
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
              topicsCovered: ['Sparse Matrix Triplet', 'Infix to Postfix Algorithm', 'Doubly Linked List Insertion', 'BST Traversals', 'Breadth First Search'],
              sampleQuestions: [
                'Convert infix expression (A + B * C) / (D - E) to postfix using stack trace table.',
                'Write function to insert a node at the k-th position of a doubly linked list.'
              ]
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
              topicsCovered: ['Propositional Logic Valid Arguments', 'Equivalence Relations & Partitions', 'Generating Functions', 'Homogeneous Recurrence Relations', 'Euler & Hamiltonian Graphs'],
              sampleQuestions: [
                'Test validity of argument: (p -> q) ^ (r -> s) ^ (p v r) => (q v s).',
                'Find generating function for sequence 0, 2, 6, 12, 20, ... and solve recurrence.',
                'Prove that a connected planar graph with n vertices, e edges and f faces satisfies n - e + f = 2.'
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
              topicsCovered: ['Predicate Calculus Quantifiers', 'Hasse Diagrams & Lattices', 'Non-homogeneous Recurrence', 'Isomorphic Graphs', 'Pigeonhole Principle'],
              sampleQuestions: [
                'Show that (D_30, |) is a Boolean lattice and find all atoms and complement elements.',
                'Solve recurrence relation a_n - 5a_{n-1} + 6a_{n-2} = 2^n with a_0 = 1, a_1 = 3.'
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
              topicsCovered: ['Principle of Inclusion-Exclusion', 'Warshall Algorithm for Transitive Closure', 'Distributive Lattices', 'Bipartite Graphs', 'Group Theory Cosets'],
              sampleQuestions: [
                'Determine number of integers between 1 and 1000 inclusive that are divisible by none of 3, 5, or 7.',
                'Compute transitive closure matrix using Warshall algorithm for given 4-element relation.'
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
              topicsCovered: ['Truth Tables & Tautology', 'Equivalence Classes', 'Recurrence Particular Solutions', 'Chromatic Number of Graphs', 'Trees & Spanning Trees'],
              sampleQuestions: [
                'Find chromatic polynomial and chromatic number of wheel graph W_5.',
                'Prove by induction that 3^(2n+2) - 8n - 9 is divisible by 64 for all n >= 1.'
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
              topicsCovered: ['Logical Equivalence Proofs', 'Functions & Invertibility', 'Generating Function Sequences', 'Complete Bipartite Graphs', 'Lagrange Theorem Groups'],
              sampleQuestions: [
                'State and prove Lagrange theorem for finite subgroups.',
                'Show that K_3,3 is non-planar using Kuratowski theorem.'
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
              topicsCovered: ['Mathematical Induction', 'Posets and Hasse Diagrams', 'Linear Recurrence Relations', 'Planar Graphs', 'Group Theory'],
              sampleQuestions: [
                'State and prove Principle of Mathematical Induction for sum of squares of first n integers.',
                'Solve linear recurrence relation with given initial conditions.'
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
              topicsCovered: ['Karnaugh Maps 5-Variable', 'Carry Lookahead Adder', 'Cache Direct vs Set Associative', 'Booth Multiplier Algorithm', 'Pipelining Data Hazards'],
              sampleQuestions: [
                'Design a synchronous 3-bit up/down counter using JK flip-flops.',
                'Explain Booth multiplication algorithm and multiply (-7) by (+3) showing all registers.',
                'Calculate effective memory access time for a 2-level cache hierarchy with given hit ratios and penalties.'
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
              topicsCovered: ['Hardwired vs Microprogrammed Control', 'Interrupt Vector Handling', 'Direct Memory Access Controller', 'Virtual Memory TLB', 'Addressing Modes'],
              sampleQuestions: [
                'Compare hardwired control unit and microprogrammed control unit with structural block diagrams.',
                'Explain cycle stealing and burst mode in DMA transfers.'
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
              topicsCovered: ['Quine-McCluskey Minimization', 'Mealy vs Moore State Machines', 'Priority Encoder Circuit', 'Johnson Counter', 'FPGA Architecture Basics'],
              sampleQuestions: [
                'Minimize Boolean function using Quine-McCluskey tabular method with don t care terms.',
                'Design a sequence detector for pattern 1011 using Moore state model and D flip-flops.'
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
              topicsCovered: ['ALU Design Arithmetic Extension', 'Instruction Cycle Timing', 'Cache Write-Through vs Write-Back', 'Multiplexer Logic Realization', 'Memory Bus Protocols'],
              sampleQuestions: [
                'Implement Full Subtractor circuit using two 4:1 multiplexers.',
                'Explain memory hierarchy performance tradeoff between L1 cache, L2 cache, and DRAM.'
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
              topicsCovered: ['IEEE 754 Floating Point Representation', 'Pipelining Branch Penalties', 'Microprogram Sequencing', 'Vector Processing', 'Bus Arbitration Schemes'],
              sampleQuestions: [
                'Represent decimal value -118.625 in IEEE 754 single-precision 32-bit floating-point format.',
                'Analyze 5-stage RISC instruction pipeline and compute speedup over non-pipelined execution.'
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
              topicsCovered: ['Hazard Free Logic Circuits', 'State Table Reduction Implication Chart', 'Master-Slave JK Flip-Flop', 'Magnitude Comparator', 'PAL vs PLA Implementation'],
              sampleQuestions: [
                'Reduce state table using implication chart method and determine equivalence classes.',
                'Explain race-around condition in JK flip-flop and show how Master-Slave design cures it.'
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
              topicsCovered: ['Decoder Expansion Circuits', 'Synchronous Binary Counter', 'Instruction Pipelining RAW Hazards', 'Memory Interleaving', 'RISC vs CISC Architecture'],
              sampleQuestions: [
                'Construct 4:16 line decoder using five 2:4 line decoders with enable inputs.',
                'Discuss data hazards in pipelined execution and describe operand forwarding mechanism.'
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
              topicsCovered: ['Shift Registers PIPO/SISO', 'Combinational Logic Optimization', 'Cache Mapping Techniques', 'I/O Polling vs Interrupt Driven', 'Instruction Format Design'],
              sampleQuestions: [
                'Compare Direct mapping, Associative mapping and Set-Associative mapping cache architectures.',
                'Design 4-bit universal shift register capable of hold, shift-right, shift-left and parallel load.'
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
              topicsCovered: ['Boolean Function Simplification', 'Full Adder/Subtractor Design', 'Flip-Flop Conversion D to T', 'Computer Memory Organization', 'Addressing Modes'],
              sampleQuestions: [
                'Convert SR flip-flop to JK flip-flop showing excitation tables and conversion logic equations.',
                'Explain various addressing modes supported by modern CPU architectures with illustrative examples.'
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
              topicsCovered: ['CRC Polynomial Divisor', 'Selective Repeat ARQ vs Go-Back-N', 'CIDR Subnet Mask Allocation', 'Dijkstra Link State Routing', 'TCP Congestion Control AIMD'],
              sampleQuestions: [
                'Generate 4-bit CRC remainder for bit stream 1101011011 using divisor polynomial x^4 + x + 1.',
                'An organization is assigned address block 200.10.0.0/20. Design 4 subnets with given host requirements.',
                'Demonstrate Dijkstra algorithm to determine least-cost paths from router Node A to all other nodes.'
              ]
            },
            {
              id: 'dccn-2025-makeup',
              title: 'Data Communication and Computer Network 2025 Makeup',
              subjectId: 'data-communication-and-computer-network',
              subjectName: 'Data Communication and Computer Network',
              subjectCode: 'CSS 2102',
              year: 2025,
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/data-communication-and-computer-network/2025/dccn-2025-makeup.pdf',
              thumbnailUrl: '/thumbnails/dccn-2025-makeup.png',
              vaultKey: 'vault-dccn-2025-makeup',
              fileSize: '81.7 KB',
              pageCount: 3,
              dateHeld: '05-Jan-2026',
              topicsCovered: ['Hamming Code Error Correction', 'CSMA/CD Minimum Frame Length', 'Distance Vector Routing Count-to-Infinity', 'DNS Resolution Iterative vs Recursive', 'TCP Three-Way Handshake'],
              sampleQuestions: [
                'Construct 7-bit Hamming code for 4-bit data word 1011 with even parity check bits.',
                'Calculate minimum frame size in a 1 Gbps Ethernet LAN with cable length 1 km and propagation speed 2x10^8 m/s.'
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
              variant: 'Makeup',
              fileUrl: '/pyqs/semester-3/endsem/data-communication-and-computer-network/2024/dccn-2024-makeup.pdf',
              thumbnailUrl: '/thumbnails/dccn-2024-makeup.png',
              vaultKey: 'vault-dccn-2024-makeup',
              fileSize: '80.5 KB',
              pageCount: 3,
              dateHeld: '15-Jan-2024',
              topicsCovered: ['Line Coding NRZ-L/Manchester', 'Sliding Window Throughput Analysis', 'ARP Resolution Protocol', 'BGP Exterior Gateway Protocol', 'HTTP/1.1 vs HTTP/2 Persistent Connections'],
              sampleQuestions: [
                'Draw waveform for bit stream 0100110001 using Differential Manchester and bipolar AMI encoding.',
                'Explain how Address Resolution Protocol resolves IPv4 address to Ethernet MAC address.'
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
              topicsCovered: ['Shannon & Nyquist Capacity Limit', 'Stop-and-Wait ARQ Efficiency', 'IP Packet Fragmentation and Reassembly', 'UDP Header vs TCP Header', 'Leaky Bucket Traffic Shaping'],
              sampleQuestions: [
                'A channel has bandwidth 4 kHz and SNR 30 dB. Calculate maximum theoretical data rate using Shannon formula.',
                'Show fragmentation fields (Flags, Fragment Offset, Total Length) when a 4000-byte IPv4 packet traverses MTU 1500.'
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
              topicsCovered: ['Transmission Media Attenuation', 'Bit-Stuffing & Byte-Stuffing', 'Pure ALOHA vs Slotted ALOHA', 'Subnetting Calculation', 'Email SMTP & POP3/IMAP'],
              sampleQuestions: [
                'Compare maximum channel throughput of Pure ALOHA with Slotted ALOHA and derive the peak utilization.',
                'Perform bit stuffing on sequence 01111110111110011111110 using standard flag delimiter 01111110.'
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
              topicsCovered: ['OSI 7-Layer Architecture Functions', 'FDM vs TDM Multiplexing', 'Error Detection Checksum Algorithm', 'Distance Vector Bellman-Ford Routing', 'Socket API Client-Server Model'],
              sampleQuestions: [
                'List all seven layers of ISO-OSI model and describe primary functions and protocol data unit of each layer.',
                'Compute Internet checksum for two 16-bit binary words using 1 s complement arithmetic.'
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
              topicsCovered: ['Principal Component Analysis Eigenvectors', 'Z-Score Standardization vs Min-Max', 'Decision Tree Information Gain & Gini Impurity', 'Confusion Matrix Evaluation Metrics', 'K-Means Elbow Method'],
              sampleQuestions: [
                'Calculate Gini impurity and Information Gain to determine root split attribute for given training dataset.',
                'Given covariance matrix of two features, determine principal eigenvalues and corresponding eigenvectors.',
                'Compute Precision, Recall, F1-Score, and Specificity from given 2x2 confusion matrix.'
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
              topicsCovered: ['Chi-Square Independence Test', 'Linear Regression Ordinary Least Squares', 'Logistic Regression Sigmoid Function', 'Hierarchical Clustering Dendrogram', 'Outlier Detection IQR Method'],
              sampleQuestions: [
                'Fit linear regression line y = beta_0 + beta_1 * x using Ordinary Least Squares for given 5 data pairs.',
                'Perform Chi-Square goodness-of-fit test at 5% significance level to test independence of categorical variables.'
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
              topicsCovered: ['Data Cleaning Missing Value Imputation', 'Pearson Correlation Coefficient', 'Multiple Linear Regression R-Squared', 'ROC Curve & AUC Score', 'K-Nearest Neighbors Classification'],
              sampleQuestions: [
                'Compute Pearson correlation coefficient r between study hours and exam scores for given student data.',
                'Explain Euclidean distance vs Manhattan distance metric in KNN and classify test query point with k = 3.'
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