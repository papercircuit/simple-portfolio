import { motion } from "framer-motion";

const draw = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 1,
    },
  },
};

const Logo = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1080.000000 1080.000000"
      width="100.000000pt"
      height="100.000000pt"
    >
      <motion.g
        transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M4930 5400 l0 -1710 25 0 25 0 0 1710 0 1710 -25 0 -25 0 0 -1710z"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M1637 6610 c-16 -10 -38 -32 -48 -49 -18 -30 -19 -68 -19 -1126 0
-1235 -6 -1146 77 -1186 l43 -21 0 -137 c0 -93 4 -141 12 -149 17 -17 1699
-17 1716 0 8 8 12 56 12 150 l0 138 34 14 c18 7 43 24 55 37 l21 23 0 1125 c0
1052 -2 1127 -18 1147 -48 57 10 54 -964 53 -846 0 -894 -1 -921 -19z m1825
-68 c10 -10 14 -224 16 -1097 1 -696 -1 -1092 -8 -1109 l-10 -26 -900 0 -900
0 -10 26 c-13 34 -14 2153 -1 2188 6 13 18 26 28 29 10 3 413 4 895 3 705 -1
880 -4 890 -14z m-104 -2424 l3 -118 -801 0 -800 0 0 113 c0 63 3 117 7 120 3
4 362 6 797 5 l791 -3 3 -117z"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M1900 6260 c-19 -19 -20 -33 -20 -508 0 -484 0 -489 21 -508 20 -18
          46 -19 661 -19 l640 0 19 24 c18 22 19 46 19 505 0 420 -2 484 -16 504 l-15
          22 -645 0 c-631 0 -644 0 -664 -20z"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M1847 4763 c-4 -3 -7 -21 -7 -40 0 -31 2 -33 35 -33 34 0 35 1 35 40
        0 37 -2 40 -28 40 -16 0 -32 -3 -35 -7z"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M2567 4763 c-4 -3 -7 -21 -7 -40 l0 -33 340 0 340 0 0 40 0 40 -333
      0 c-184 0 -337 -3 -340 -7z"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M6255 6310 c-4 -6 -3 -429 1 -940 l7 -930 254 0 253 0 0 270 0 270
    66 70 c37 38 70 70 75 70 4 0 110 -151 234 -335 l226 -335 300 0 300 0 -21 31
    c-12 16 -20 32 -18 34 2 2 30 -9 63 -25 111 -55 172 -65 365 -64 145 1 189 5
    255 23 243 65 381 211 435 459 31 140 40 345 40 895 l0 517 -260 0 -260 0 0
    -542 c0 -299 -5 -585 -10 -636 -11 -99 -38 -177 -74 -211 -71 -67 -262 -66
    -412 3 -30 14 -54 23 -54 20 0 -14 -103 -400 -108 -406 -6 -5 -645 893 -657
    924 -3 8 139 192 330 427 184 228 335 415 335 417 0 2 -132 4 -292 4 l-293 0
    -274 -345 c-151 -190 -278 -345 -283 -345 -4 0 -8 155 -8 345 l0 345 -254 0
    c-162 0 -257 -4 -261 -10z"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
        />
      </motion.g>
    </motion.svg>
  );
};

export default Logo;
