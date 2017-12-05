#include <vector>

struct Vector {
    static std::vector<float> floats() {
        return {{0.0, 1.0, 2.0}};
    }

    static std::vector<double> doubles() {
        return {{0.0, 1.0, 2.0}};
    }
};

#include "nbind/nbind.h"

NBIND_CLASS(Vector) {
    method(floats);
    method(doubles);
}
