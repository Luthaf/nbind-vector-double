#include <vector>

struct Vector {
    static std::vector<double> getVector() {
        return {{0.0, 1.0, 2.0}};
    }
};

#include "nbind/nbind.h"

NBIND_CLASS(Vector) {
    method(getVector);
}
